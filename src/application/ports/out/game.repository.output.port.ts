import { Game } from "../../core/domain/game";

export interface GameRepositoryOutputPort {
    save(game: Game): Promise<Game>
    findAll(): Promise<Game[]>
    findById(id: bigint): Promise<Game>
    findByName(name: string): Promise<Game>
    update(id: bigint, data: Partial<Game>): Promise<Game>
    delete(id: bigint): Promise<void>
}