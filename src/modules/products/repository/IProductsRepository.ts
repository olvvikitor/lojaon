export interface IProductsRepository {
    createProduct(product: any): Promise<void>;
    findById(id: string): Promise<any | null>;
    updateById(id: string, product: any): Promise<void>;
    deleteById(id: string): Promise<void>;
}