import { Customer } from "../../../../../application/core/domain/entities/customer"
import { RentalItem } from "../../../../../application/core/domain/entities/rental-item"

export class CreatedRentalDTO {
    rentalItems: RentalItem[] = []
    customer: Customer
    date: Date

    constructor(rentalItems: RentalItem[],customer: Customer, date: Date) {
        this.rentalItems = rentalItems
        this.customer = customer
        this.date = date
    }
}