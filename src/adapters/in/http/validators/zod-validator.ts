import { ValidatorInputPort } from "../../../../application/ports/in/validator.interface";
import { ZodType } from "zod";

export class ZodValidatorAdapter implements ValidatorInputPort {

    constructor(
        private readonly schema: ZodType
    ) { }

    validate(data: unknown): unknown {
        return this.schema.parse(data)
    }
}