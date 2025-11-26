import { Inject } from "@nestjs/common";
import type { IProductsRepository } from "../repository/IProductsRepository";
import { CreateProductDto } from "../dto/CreateProductDto";

export class CreateProductService {
    constructor(
        @Inject('IProductService') private readonly productsRepository: IProductsRepository,
    ) {}
    async execute(data: CreateProductDto): Promise<void> {}

}