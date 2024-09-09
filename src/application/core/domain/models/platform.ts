import { BaseModel } from "../common/interfaces/base-model";
import { Game } from "./game";

export class Platform implements BaseModel{
    private id: bigint
    private name: string
    private games: Game[] = []
    
    // Override
    getId(): bigint {
        return this.id;    
    }

}