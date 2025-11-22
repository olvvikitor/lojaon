
import { randomUUID } from 'crypto';
import { CPF } from 'src/shared/utlis/types/cpf';


export class Cliente {
    constructor(
        private readonly id: string | null,
        private name: string,
        private cpf: string,
        private email: string,
        private password: string,
        private telefone?: string,
    ) {
        if (!this.id) {
            this.id = randomUUID();
        }
        
        this.cpf = new CPF(cpf).getValue()
        
    }

    public getProperties() {
        return {
            id: this.id,
            name: this.name,
            cpf: this.cpf,
            email: this.email,
            password: this.password,
            telefone: this.telefone
        } ;
    }
}