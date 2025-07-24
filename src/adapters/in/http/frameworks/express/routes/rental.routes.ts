import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { RentalMapper } from "../../../mappers/rental/rental.mapper";
import { RentalService } from "../../../../../../application/core/use-cases/rental.service";
import { RentalController } from "../controllers/rental/rental.controller";
import { CreateRentalSchema } from "../../../libs/validation/zod/schemas/create-rental.schema";
import { ZodValidatorAdapter } from "../../../libs/validation/zod/zod-validator";
import { PrismaRentalRepositoryAdapter } from "../../../../../out/orm/prisma/repositories/prisma-rental.repository.adapter";

const rentalRouter = Router()
const rentalValidator = new ZodValidatorAdapter(CreateRentalSchema)
const rentalRepository = new PrismaRentalRepositoryAdapter(new PrismaClient())
const rentalService = new RentalService(rentalRepository)
const rentalMapper = new RentalMapper()
const rentalController = new RentalController(rentalValidator, rentalService, rentalMapper)

rentalRouter.post('/rentals', rentalController.create)

export { rentalRouter }