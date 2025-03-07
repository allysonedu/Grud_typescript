import { Customer } from '../Customer'

export interface CustomerRepository {
  save(customer: Customer): Promise<void>
  getAll(): Promise<Array<Customer>>
}
