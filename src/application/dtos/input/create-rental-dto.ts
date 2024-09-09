import { Customer } from "../../core/domain/models/customer"
import { RentalItem } from "../../core/domain/models/rental-item"

export class CreateRentalDTO {
    rentalItems: RentalItem[]
    customer: Customer

    constructor(rentalItems: RentalItem[], customer: Customer, ){
        this.rentalItems = rentalItems
        this.customer = customer
    }
}