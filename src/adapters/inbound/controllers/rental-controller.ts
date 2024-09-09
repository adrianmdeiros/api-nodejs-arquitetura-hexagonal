import { Request, Response } from "express";
import { CreateRentalDTO } from "../../../application/dtos/input/create-rental-dto";
import { CreateRentalService } from "../../../application/core/domain/services/create-rental-service";
import { PrismaRentalRepository } from "../../outbound/orm/prisma/repositories/rental-repository";
import { prisma } from "../../outbound/orm/prisma/database/client";
import { CreatedRentalDTO } from "../../../application/dtos/output/created-rental-dto";

export class RentalController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { rentalItems, customer }: CreateRentalDTO = req.body

            const createRentalDTO = new CreateRentalDTO(rentalItems, customer)
            const createRentalService = new CreateRentalService(new PrismaRentalRepository(prisma))

            const rental = await createRentalService.execute(createRentalDTO)

            const createdRentalDTO = new CreatedRentalDTO(rental.getRentalItems(), rental.getCustomer(), rental.getDate())

            return res.status(201).json(createdRentalDTO)
        } catch (error: any) {
            return res.status(res.statusCode).json({ error: error.message })
        }
    }

}