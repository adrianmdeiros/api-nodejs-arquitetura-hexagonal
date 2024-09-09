import { BaseModel } from "../common/interfaces/base-model";
import { ConsoleUses } from "./console-uses";
import { Rental } from "./rental";
import { RentalItem } from "./rental-item";

export class Customer implements BaseModel {
    private id: bigint
    private name: string
    private email: string
    private phone: string
    private password: string
    private rentals: Rental[] = []
    private consoleUses: ConsoleUses[] = []     


    constructor(name: string, email: string, phone: string, password: string) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.password = password;
  }

    rental(items: RentalItem[]){
        const rental = new Rental(items, this)
        rental.calculateTotalCost()
        return rental
    }   

    // Override
    getId(): bigint {
        return this.id
    }

    public getName(): string {
        return this.name;
      }
    
      public getEmail(): string {
        return this.email;
      }
    
      public getPhone(): string {
        return this.phone;
      }
    
      public getPassword(): string {
        return this.password;
      }
    
      public getRentals(): Rental[] {
        return this.rentals;
      }
    
      public getConsoleUses(): ConsoleUses[] {
        return this.consoleUses;
      }

}