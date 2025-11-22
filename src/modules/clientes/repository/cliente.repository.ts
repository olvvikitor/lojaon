import { Inject, Injectable } from "@nestjs/common";
import IClienteRepository from "./ICliente.repository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { ClienteMapper } from "../models/cliente.mapper";
import { Cliente } from "../models/Cliente.entity";


@Injectable()
export class ClienteRepository implements IClienteRepository{

  constructor(private prisma: PrismaService) {}


    async findByEmail(id: string): Promise<Cliente | null> {
        const cliente =  await this.prisma.cliente.findUnique({
            where: {
                email: id
            }
        });
        return ClienteMapper.toDomainFromPrisma(cliente);
    }

    async createCliente(cliente: Cliente): Promise<void> {
        const clienteData = ClienteMapper.toPrisma(cliente);
        await this.prisma.cliente.create({
            data:{
                cpf: clienteData.cpf,
                email: clienteData.email,
                name: clienteData.name,
                password: clienteData.password,
                telefone: clienteData.telefone
            }
        })
        }

    findById(id: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}