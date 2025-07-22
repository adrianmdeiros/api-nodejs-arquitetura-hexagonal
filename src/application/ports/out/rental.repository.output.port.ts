import { Rental } from '../../core/domain/entities/rental';

export interface RentalRepositoryOutputPort {
    save(rental: Rental): void
}