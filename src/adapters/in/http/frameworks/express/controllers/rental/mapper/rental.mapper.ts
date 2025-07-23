import { Rental } from "../../../../../../../../application/core/domain/rental";
import { RentalRequest } from "../../../../../dtos/in/rental-request.dto";
import { RentalResponse } from "../../../../../dtos/out/rental-response.dto";

export class RentalMapper {

    toRental({ rentalItems, customer }: RentalRequest): Rental {
        return new Rental(rentalItems, customer)
    }

    toRentalResponse({ rentalItems, customer, date }: Rental): RentalResponse {
        return {
            rentalItems,
            customer,
            date
        }
    }
}