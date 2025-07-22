import { Router } from "express";
import { rentalRouter } from "./rental.routes";

const routes = Router()

routes.use(rentalRouter)

export { routes }