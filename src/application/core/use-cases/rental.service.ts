import { RentalServiceInputPort } from "../../ports/in/rental.service.input.port";
import { RentalRepositoryOutputPort } from "../../ports/out/rental.repository.output.port";
import { Rental } from "../domain/entities/rental";
import { RentalItem } from "../domain/entities/rental-item";

export class RentalService implements RentalServiceInputPort {

    constructor(
        private readonly rentalRepository: RentalRepositoryOutputPort
    ) { }

    create(rental: Rental): void {
        return this.rentalRepository.save(rental)
    }

    addGameToRental(rentalItem: RentalItem, rental: Rental): void {
        return rental.addItem(rentalItem)
    }

    calculateTotalRentalCost(rental: Rental): number {
        return rental.calculateTotalCost()
    }

}