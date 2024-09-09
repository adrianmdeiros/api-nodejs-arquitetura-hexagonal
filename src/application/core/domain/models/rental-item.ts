import { GamePlatform } from "./game-platform"
import { Rental } from "./rental"

export class RentalItem {
    private gamePlatform: GamePlatform
    private days: number
    private quantity: number
    private rental: Rental

    constructor(days: number, quantity: number) {
        this.days = days
        this.quantity = quantity
    }

    calculateRentalItemCost(): number {
        return (this.days * this.gamePlatform.getDailyPrice())
    }

    getDays(): number {
        return this.days
    }

    getGamePlatform(): GamePlatform {
        return this.gamePlatform
    }

    getQuantity(): number {
        return this.quantity
    }

    getRental(): Rental{
        return this.rental
    }
}