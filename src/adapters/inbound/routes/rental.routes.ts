import { Router } from "express";
import { RentalController } from "../controllers/rental-controller";

const rentalRouter = Router()
const rentalController = new RentalController()

rentalRouter.post('/rentals', rentalController.create)

export { rentalRouter }
