import { Rental } from "../../core/domain/models/rental";

export interface RentalRepository{
    save(rental: Rental): Promise<Rental>
}