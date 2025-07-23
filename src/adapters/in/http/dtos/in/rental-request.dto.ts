import { Customer } from "../../../../../application/core/domain/customer"
import { RentalItem } from "../../../../../application/core/domain/rental-item"

export class RentalRequest {
    constructor(
        public readonly rentalItems: RentalItem[],
        public readonly customer: Customer
    ) { }
}