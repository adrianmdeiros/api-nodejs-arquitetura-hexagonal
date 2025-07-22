import { Rental } from "../../core/domain/entities/rental";
import { RentalItem } from "../../core/domain/entities/rental-item";

export interface RentalServiceInputPort {
    create(rental: Rental): void
    addGameToRental(rentalItem: RentalItem, rental: Rental): void
    calculateTotalRentalCost(rental: Rental): number
}