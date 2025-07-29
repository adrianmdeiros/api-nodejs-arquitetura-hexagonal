import { Router } from "express";
import { rentalRouter } from "./rental.routes";
import { container } from "tsyringe";

const routes = Router()

routes.use(rentalRouter)

container.registerInstance('Routes', routes)