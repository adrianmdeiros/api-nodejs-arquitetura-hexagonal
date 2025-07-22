import { Customer } from "./customer";
import { RentalItem } from "./rental-item";

export class Rental {

    constructor(
        public readonly rentalItems: RentalItem[] = [],
        public readonly customer: Customer,
        public readonly date: Date = new Date(Date.now())
    ) { }

    rehydrate(id: bigint, rentalItems: RentalItem[] = [], customer: Customer) {
        const rental = new Rental(rentalItems, customer);
        (rental as any).id = id

        return rental
    }

    public readonly id!: bigint

    addItem(rentalItem: RentalItem): void {
        this.rentalItems.push(rentalItem);
    }

    calculateTotalCost(): number {
        let totalRentalCost = 0
        this.rentalItems.forEach((rentalItem) =>
            totalRentalCost += rentalItem.calculateRentalItemCost()
        )
        return totalRentalCost
    }

}