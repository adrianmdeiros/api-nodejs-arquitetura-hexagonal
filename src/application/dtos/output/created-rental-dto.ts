import { Customer } from "../../core/domain/models/customer"
import { RentalItem } from "../../core/domain/models/rental-item"

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