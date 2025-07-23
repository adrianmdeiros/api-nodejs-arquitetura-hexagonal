import { Rental } from '../../core/domain/rental';

export interface RentalRepositoryOutputPort {
    save(rental: Rental): Promise<Rental>
}