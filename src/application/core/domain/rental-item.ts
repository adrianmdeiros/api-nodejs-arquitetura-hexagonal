import { GamePlatform } from "./game-platform"
import { Rental } from "./rental"

export class RentalItem {
    public readonly rental: Rental
    public readonly gamePlatform: GamePlatform

    constructor(
        private readonly days: number,
        private readonly quantity: number
    ) { }

    calculateRentalItemCost(): number {
        return (this.days * this.gamePlatform.dailyPrice)
    }

}