import { Rental } from '../../core/domain/rental';

export interface RentalRepositoryOutputPort {
    save(rental: Rental): Promise<Rental>
    findAll(): Promise<Rental[]>
    findById(id: bigint): Promise<Rental>
    update(id: bigint, data: Partial<Rental>): Promise<Rental>
    delete(id: bigint): Promise<void>
}