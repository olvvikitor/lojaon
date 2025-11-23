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
        const cliente:Cliente | null =  await this.clienteRepository.findByEmailOrCpf({email, cpf:''});
        if(!cliente){
            throw new NotFoundException('Cliente não encontrado');
        }
        return cliente;
    }

}