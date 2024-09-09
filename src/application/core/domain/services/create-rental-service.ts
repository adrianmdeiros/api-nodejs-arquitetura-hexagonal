import { CreateRentalDTO } from "../../../dtos/input/create-rental-dto";
import { APIError } from "../../../helpers/APIError";
import { CreateRentalServicePort } from "../../../ports/in/create-rental-service-port";
import { RentalRepository } from "../../../ports/out/rental-repository";
import { Rental } from "../models/rental";

export class CreateRentalService implements CreateRentalServicePort{

    constructor(private readonly rentalRepository: RentalRepository){}

    async execute({ rentalItems, customer }: CreateRentalDTO): Promise<Rental> {
        const rental = new Rental(rentalItems, customer)
        return await this.rentalRepository.save(rental)
    }

}