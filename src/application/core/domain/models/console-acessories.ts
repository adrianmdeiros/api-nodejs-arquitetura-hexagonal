import { BaseModel } from "../common/interfaces/base-model"

export class ConsoleAcessories implements BaseModel{
    private id: bigint
    private name: string
    private console: Console

    // Override
    getId(): bigint {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getConsole(): Console {
        return this.console
    }
}