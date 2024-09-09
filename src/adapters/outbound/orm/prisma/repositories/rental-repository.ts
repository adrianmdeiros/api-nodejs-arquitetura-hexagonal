import { RentalRepository } from "../../../../../application/ports/out/rental-repository";
import { Rental } from "../../../../../application/core/domain/models/rental";
import { PrismaClient } from "@prisma/client";
import { RentalItem } from "../../../../../application/core/domain/models/rental-item";
import { Customer } from "../../../../../application/core/domain/models/customer";

export class PrismaRentalRepository implements RentalRepository {

    constructor(private prisma: PrismaClient) { }

    async save(rental: Rental): Promise<Rental> {
        const savedRental = await this.prisma.rental.create({
            data: {
                rentalItems: {
                    connectOrCreate: rental.getRentalItems().map(rentalItem => ({
                        where: {
                            gameId_rentalId: {
                                rentalId: rental.getId(),
                                gameId: rentalItem.getGamePlatform().getGame().getId(),
                            },
                        },
                        create: {
                            gameId: rentalItem.getGamePlatform().getGame().getId(),
                            days: rentalItem.getDays(),
                            quantity: rentalItem.getQuantity(),
                        },
                    })),
                },
                customer: {
                    connectOrCreate: {
                        where: { id: rental.getCustomer().getId() },
                        create: {
                            id: rental.getCustomer().getId(),
                            email: rental.getCustomer().getEmail(),
                            name: rental.getCustomer().getName(),
                            phone: rental.getCustomer().getPhone(),
                            password: rental.getCustomer().getPassword(),
                        }
                    }
                }
            },
            include: {
                rentalItems: true,
                customer: true
            }
        })

        const rentalItems: RentalItem[] = savedRental.rentalItems.map((item): RentalItem => {
            return new RentalItem(item.days, item.quantity)
        })

        const customer = new Customer(savedRental.customer.name, savedRental.customer.email, savedRental.customer.phone, savedRental.customer.password)

        const rentalObject = new Rental(rentalItems, customer)
        return rentalObject
    }

}