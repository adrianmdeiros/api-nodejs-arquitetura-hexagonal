import { Decimal } from "@prisma/client/runtime/client.js";
import { Game } from "./game";
import { Platform } from "./platform";

export class GamePlatform {
    public readonly game: Game;
    public readonly platform: Platform;

    constructor(
        public readonly dailyPrice: Decimal
    ) { }

}