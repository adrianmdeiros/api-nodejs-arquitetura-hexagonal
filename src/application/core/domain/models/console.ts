import { ConsoleUses } from "./console-uses"
import { ConsoleAcessories } from "./console-acessories"
import { BaseModel } from "../common/interfaces/base-model"

export class Console implements BaseModel{
    private id: bigint
    private name: string
    private pricePerHour: number
    private consoleUses: ConsoleUses[] = []
    private acessories: ConsoleAcessories[] = []

    // Override
    getId(): bigint {
        return this.id
    }

}