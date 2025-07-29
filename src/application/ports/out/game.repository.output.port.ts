import { Game } from "../../core/domain/game";

export interface GameRepositoryOutputPort {
    save(game: Game): Promise<Game>
    //...
}