import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type IClienteRepository from "../repository/ICliente.repository";
import { Cliente } from "../models/Cliente.entity";

@Injectable()
export class FindByEmailService {
    constructor(
        @Inject('IClienteRepository')
        private readonly clienteRepository: IClienteRepository
    ) {}

    async execute(email: string): Promise<Cliente> {
        const cliente:Cliente | null =  await this.clienteRepository.findByEmail(email)
        if(!cliente){
            throw new NotFoundException("Cliente not found");
        }   
        return cliente;
    }

}