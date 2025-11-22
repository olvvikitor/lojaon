import { Controller, Post, Body } from "@nestjs/common";
import { CreateClienteService } from "../services/create-cliente.service";
import { CreateClienteDto } from "../dtos/create-cliente-dto";
import { ClienteMapper } from "../models/cliente.mapper";

@Controller('client')
export class ClienteController {
    constructor(
        private readonly createClienteService: CreateClienteService
    ) {}

    @Post('create')
    async create(@Body() data: CreateClienteDto): Promise<void> {
        await this.createClienteService.execute(data);
    }






}
