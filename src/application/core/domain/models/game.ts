import { BaseModel } from "../common/interfaces/base-model";
import { Platform } from "./platform";

export class Game implements BaseModel{
    private id: bigint
    private name: string
    private platforms: Platform[] = []

    // Override
    getId(): bigint {
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getplatforms(): Platform[]{
        return this.platforms;
    }

}