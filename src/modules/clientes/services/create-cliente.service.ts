import { ConflictException, Inject, Injectable } from "@nestjs/common";
import type IClienteRepository from "../repository/ICliente.repository";
import { CreateClienteDto } from "../dtos/create-cliente-dto";
import { Cliente } from "../models/Cliente.entity";
import type IHashService from "src/shared/services/bycript/IHashService";
import { ClienteMapper } from "../models/cliente.mapper";
import { FindByEmailService } from "./find-by-email";

@Injectable()
export class CreateClienteService {
    constructor(
        @Inject('IClienteRepository')
        private readonly clienteRepository: IClienteRepository,
        private readonly findClientByEmail: FindByEmailService,
        @Inject('IHashService')
        private readonly hashProvider: IHashService,
    ) { }

    async execute(data: CreateClienteDto): Promise<void> {

        data.password = await this.hashProvider.hash(data.password);

        const cliente = ClienteMapper.toDomain(data);

        const existingClient = 
        await this.clienteRepository.findByEmailOrCpf({email:cliente.getProperties().email, cpf:cliente.getProperties().cpf}) 

        if (existingClient?.getProperties().email === cliente.getProperties().email)
                throw new ConflictException('Email já cadastrado!');

        if (existingClient?.getProperties().cpf=== cliente.getProperties().cpf)
                throw new ConflictException('CPF já cadastrado!');

        await this.clienteRepository.createCliente(cliente);
    }


}
