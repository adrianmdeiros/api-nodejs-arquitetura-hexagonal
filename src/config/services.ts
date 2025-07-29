import { container } from "tsyringe";
import { RentalServiceInputPort } from "../application/ports/in/rental.service.input.port";
import { RentalService } from "../application/core/use-cases/rental.service";

container.register<RentalServiceInputPort>(
    'RentalServiceInputPort',
    { useClass: RentalService }
)