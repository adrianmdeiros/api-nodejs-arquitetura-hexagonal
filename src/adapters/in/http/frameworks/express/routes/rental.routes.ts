import { Router } from "express";
import { container } from "tsyringe";
import { RentalController } from "../controllers/rental/rental.controller";

const rentalRouter = Router()
const rentalController = container.resolve<RentalController>('RentalController')

rentalRouter.post('/rentals', rentalController.create.bind(rentalController))

export { rentalRouter };
