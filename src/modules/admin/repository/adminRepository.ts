import { Cliente } from "src/modules/clientes/models/Cliente.entity";
import { IAdminRepository } from "./IAdminRepository";
import { ClienteRepository } from "src/modules/clientes/repository/cliente.repository";
import { PrismaService } from "src/shared/services/prisma/prisma.service";
import { AdminEntity } from "../domain/AdminEntity";

export class AdminRepository implements IAdminRepository{
    constructor(
        private prisma: PrismaService
    ) {
    }
    createAdmin(admin: AdminEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findAdminByEmail(email: string): Promise<AdminEntity | null> {
        throw new Error("Method not implemented.");
    }



}