import { APIError } from "../../../helpers/APIError";
import { BaseModel } from "../common/interfaces/base-model";
import { Customer } from "./customer";
import { RentalItem } from "./rental-item";

export class Rental implements BaseModel {
    private id: bigint
    private date: Date
    private rentalItems: RentalItem[] = []
    private customer: Customer

    constructor(rentalItems: RentalItem[], customer: Customer) {
        this.rentalItems = rentalItems
        this.customer = customer
        this.date = new Date(Date.now())
    }

    addItem(rentalItem: RentalItem): RentalItem {
        this.rentalItems.push(rentalItem);
        return rentalItem
    }

    calculateTotalCost() {
        let totalRentalCost = 0
        this.rentalItems.forEach((rentalItem) =>
            totalRentalCost += rentalItem.calculateRentalItemCost()
        )
        return totalRentalCost
    }

    // Override
    getId(): bigint {
        return this.id;
    }

    getDate(): Date {
        return this.date
    }

    getRentalItems(): RentalItem[] {
        return this.rentalItems
    }
    getCustomer(): Customer {
        return this.customer
    }
}