import { Cliente } from "../models/Cliente.entity"

export default interface IClienteRepository{
    createCliente(cliente:Cliente):Promise<void>
    findById(id:string):Promise<Cliente|null>
    findByEmailOrCpf(params:{cpf:string, email:string}):Promise<Cliente|null>
    deleteById(id:string):Promise<void>
    updateById(id:string):Promise<void>
}