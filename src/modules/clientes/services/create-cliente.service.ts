import { Inject, Injectable } from "@nestjs/common";
import type IClienteRepository from "../repository/ICliente.repository";
import { CreateClienteDto } from "../dtos/create-cliente-dto";
import { Cliente } from "../models/Cliente.entity";
import type IHashService  from "src/shared/services/bycript/IHashService";
import { ClienteMapper } from "../models/cliente.mapper";

@Injectable()
export class CreateClienteService {
    constructor(
        @Inject('IClienteRepository')
        private readonly clienteRepository: IClienteRepository,
        @Inject('IHashService')
        private readonly hashProvider: IHashService,
    ) {}

    async execute(data: CreateClienteDto): Promise<void> {

        data.password = await this.hashProvider.hash(data.password);

        const cliente = ClienteMapper.toDomain(data);

        await this.clienteRepository.createCliente(cliente);
    }

}
