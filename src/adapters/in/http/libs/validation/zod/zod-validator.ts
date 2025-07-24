import { DataValidatorInputPort } from "../../../../../../application/ports/in/data-validator.input.port";
import { ZodType } from "zod";

export class ZodValidatorAdapter implements DataValidatorInputPort {

    constructor(
        public readonly schema: ZodType
    ) { }

    validate(data: unknown): unknown {
        return this.schema.parse(data)
    }
}