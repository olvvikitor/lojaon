import IClienteRepository from "src/modules/clientes/repository/ICliente.repository";
import { ILojaRepository } from "src/modules/loja/repository/ILojaRepository";
import { IProductsRepository } from "src/modules/products/repository/IProductsRepository";
import { AdminEntity } from "../domain/AdminEntity";

export interface IAdminRepository{
    createAdmin(admin:any):Promise<void>;
    findAdminByEmail(email:string):Promise<any | null>;
}