import { Request, Response } from "express";
import { DataValidatorInputPort } from "../../../../../../../application/ports/in/data-validator.input.port";
import { RentalServiceInputPort } from "../../../../../../../application/ports/in/rental.service.input.port";
import { RentalMapper } from "../../../../mappers/rental/rental.mapper";
import { inject, injectable } from "tsyringe";

@injectable()
export class RentalController {

    constructor(
        @inject('RentalValidator') private readonly dataValidator: DataValidatorInputPort,
        @inject('RentalServiceInputPort') private readonly rentalService: RentalServiceInputPort,
        @inject('RentalMapper') private readonly rentalMapper: RentalMapper
    ) { }

    async create(req: Request, res: Response) {
        try {
            const validatedData = await this.dataValidator.validate(req.body)
            const dto = this.rentalMapper.toRentalRequest(validatedData)
            const rental = this.rentalMapper.toRental(dto)
            const createdRental = await this.rentalService.create(rental)
            return res.status(201).json(createdRental)

        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

}