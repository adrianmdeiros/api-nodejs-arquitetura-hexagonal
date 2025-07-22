import { PrismaClient } from "@prisma/client";
import { Customer } from "../../../../../application/core/domain/entities/customer";
import { Rental } from "../../../../../application/core/domain/entities/rental";
import { RentalRepository } from "../../../../../application/ports/out/rental-repository";

export class PrismaRentalRepository implements RentalRepository {

    constructor(private prisma: PrismaClient) { }

    async save(rental: Rental): Promise<Rental> {
        return new Rental([], new Customer('','','',''))
    }

}