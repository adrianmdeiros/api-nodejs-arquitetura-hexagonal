import { BaseModel } from "../common/interfaces/base-model"
import { Console } from "./console"

export class ConsoleUses implements BaseModel {
    private id: bigint
    private console: Console
    private start: Date
    private end: Date

    // Override
    getId(): bigint {
        return this.id
    }

    getConsole(): Console {
        return this.console
    }

    getStart(): Date {
        return this.start
    }

    getEnd(): Date {
        return this.end
    }
}