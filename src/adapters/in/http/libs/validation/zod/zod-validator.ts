import { injectable } from "tsyringe";
import { DataValidatorInputPort } from "../../../../../../application/ports/in/data-validator.input.port";
import { ZodType } from "zod";

@injectable()
export class ZodValidatorAdapter implements DataValidatorInputPort {

    constructor(
        private readonly schema: ZodType
    ) { }

    validate(data: unknown): unknown {
        return this.schema.parse(data)
    }
}