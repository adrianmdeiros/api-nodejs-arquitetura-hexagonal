import { PrismaClient } from "@prisma/client";
import { Customer } from "../../../../../application/core/domain/customer";
import { Rental } from "../../../../../application/core/domain/rental";
import { RentalRepositoryOutputPort } from "../../../../../application/ports/out/rental.repository.output.port";

export class PrismaRentalRepository implements RentalRepositoryOutputPort {

    constructor(private prisma: PrismaClient) { }

    async save(rental: Rental): Promise<Rental> {
        return new Rental([], new Customer('','','',''))
    }

}