import { Router } from "express";
import { RentalController } from "../controllers/rental/rental.controller";
import { ZodValidatorAdapter } from "../../../validators/zod-validator";
import { CreateRentalSchema } from "../../../libs/validation/zod/schemas/create-rental.schema";
import { RentalService } from "../../../../../../application/core/use-cases/rental.service";
import { PrismaRentalRepository } from "../../../../../out/orm/prisma/repositories/rental-repository";
import { RentalMapper } from "../controllers/rental/mapper/rental.mapper";
import { PrismaClient } from "@prisma/client";

const rentalRouter = Router()
const rentalValidator = new ZodValidatorAdapter(CreateRentalSchema)
const rentalRepository = new PrismaRentalRepository(new PrismaClient())
const rentalService = new RentalService(rentalRepository)
const rentalMapper = new RentalMapper()
const rentalController = new RentalController(rentalValidator, rentalService, rentalMapper)

rentalRouter.post('/rentals', rentalController.create)

export { rentalRouter }
