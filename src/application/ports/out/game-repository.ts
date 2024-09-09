import { Game } from "../../core/domain/models/game";

export interface GameRepository{
    save(game: Game): Promise<Game>
}