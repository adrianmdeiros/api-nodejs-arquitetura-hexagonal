import { ConsoleUses } from "./console-uses";
import { Rental } from "./rental";
import { RentalItem } from "./rental-item";

export class Customer {

  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly password: string,
    public readonly rentals: Rental[] = [],
    public readonly consoleUses: ConsoleUses[] = []
  ) { }

  rehydrate(
    id: bigint,
    name: string,
    email: string,
    phone: string,
    password: string,
    rentals: Rental[] = [],
    consoleUses: ConsoleUses[] = []
  ) {
    const customer = new Customer(name, email, phone, password, rentals, consoleUses);
    (customer as any).id = id

    return customer
  }

  public readonly id!: bigint

  rent(items: RentalItem[]) {
    const rental = new Rental(items, this)
    rental.calculateTotalCost()
    return rental
  }

}