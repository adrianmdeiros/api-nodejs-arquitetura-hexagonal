import { Request, Response } from "express";
import { RentalRequest } from "../../../../dtos/in/rental-request.dto";
import { ValidatorInputPort } from "../../../../../../../application/ports/in/validator.interface";
import { RentalServiceInputPort } from "../../../../../../../application/ports/in/rental.service.input.port";
import { RentalResponse } from "../../../../dtos/out/rental-response.dto";
import { RentalMapper } from "./mapper/rental.mapper";

export class RentalController {

    constructor(
        private readonly dataValidator: ValidatorInputPort,
        private readonly rentalService: RentalServiceInputPort,
        private readonly rentalMapper: RentalMapper
    ) { }

    async create(req: Request<RentalRequest>, res: Response<RentalResponse>) {
        const validatedData = this.dataValidator.validate(req.body) as RentalRequest
        const rental = this.rentalMapper.toRental(validatedData)
        
        await this.rentalService.create(rental)

        return res.status(201)
    }

}