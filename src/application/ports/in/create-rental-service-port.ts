import { Rental } from "../../core/domain/models/rental";
import { CreateRentalDTO } from "../../dtos/input/create-rental-dto";

export interface CreateRentalServicePort {
    execute(rental: CreateRentalDTO): Promise<Rental>
}