import { Customer } from "../../../../../application/core/domain/customer"
import { RentalItem } from "../../../../../application/core/domain/rental-item"

export class RentalResponse {
    constructor(
        public readonly rentalItems: RentalItem[],
        public readonly customer: Customer,
        public readonly date: Date
    ) { }
}