import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import type IClienteRepository from "src/modules/clientes/repository/ICliente.repository";
import type IHashService from "src/shared/services/bycript/IHashService";
import type { ITokenProvider } from "src/shared/services/jwt/ITokenProvider";

type LoginPayload = {
    param: string;
    password: string;
}


@Injectable()
export class LoginClienteService {

    constructor(
        @Inject('IClienteRepository') private readonly clienteRepository: IClienteRepository,
        @Inject('ITokenProvider') private readonly tokenProvider: ITokenProvider,
        @Inject('IHashService') private readonly hashProvider: IHashService,
    ) {
    }
    async execute(payload: LoginPayload): Promise<{access_token:string}> {
        const cliente = await this.clienteRepository.findByEmailOrCpf({ email: payload.param, cpf: payload.param });
        if (!cliente) {
            throw new BadRequestException('Senha ou email incorreto');
        }
        if(
            !(await this.hashProvider.compare(payload.password, cliente.getProperties().password))){
                throw new BadRequestException('Senha ou email incorreto');
        }
        return this.tokenProvider.generateToken(payload);
    }

}