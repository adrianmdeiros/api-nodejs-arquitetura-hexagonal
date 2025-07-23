import { Rental } from "../../core/domain/rental";
import { RentalItem } from "../../core/domain/rental-item";

export interface RentalServiceInputPort {
    create(rental: Rental): Promise<Rental>
    addGameToRental(rentalItem: RentalItem, rental: Rental): void
    calculateTotalRentalCost(rental: Rental): number
}