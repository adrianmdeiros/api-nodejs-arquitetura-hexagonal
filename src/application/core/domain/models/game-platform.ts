import { Game } from "./game";
import { Platform } from "./platform";

export class GamePlatform {
    private game: Game;
    private platform: Platform;
    private dailyPrice: number

    getDailyPrice(): number {
        return this.dailyPrice
    }

    getGame(): Game {
        return this.game
    }

    getPlatform(): Platform {
        return this.platform
    }
    
}