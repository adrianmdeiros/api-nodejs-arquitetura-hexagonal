import { Request, Response } from "express";
import { DataValidatorInputPort } from "../../../../../../../application/ports/in/data-validator.input.port";
import { RentalServiceInputPort } from "../../../../../../../application/ports/in/rental.service.input.port";
import { RentalMapper } from "../../../../mappers/rental/rental.mapper";

export class RentalController {

    constructor(
        private readonly dataValidator: DataValidatorInputPort,
        private readonly rentalService: RentalServiceInputPort,
        private readonly rentalMapper: RentalMapper
    ) { }

    async create(req: Request, res: Response) {
        try {
            const validatedData = await this.dataValidator.validate(req.body)
            const dto = this.rentalMapper.toRentalRequest(validatedData)
            const rental = this.rentalMapper.toRental(dto)
            await this.rentalService.create(rental)
            return res.status(201).send()

        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

}