export class CreateProductDto {
    constructor(private nome: string,
        private descricao: string,
        private preco: string,
        private estoque: string,
        private categoriaId: string | null) {
    }
}