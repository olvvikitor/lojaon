import { PrismaService } from "src/shared/services/prisma/prisma.service";
import type { IProductsRepository } from "./IProductsRepository";

export class ProductRepository implements IProductsRepository {
    /**
     *
     */
    constructor(
        private readonly prismaService: PrismaService
    ) {
        
    }
    async createProduct(product: any): Promise<void> {
        await this.prismaService.produto.create({
            data: product});
    }
    findById(id: string): Promise<any | null> {
        throw new Error("Method not implemented.");
    }
    updateById(id: string, product: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
