import { Inject, Injectable } from "@nestjs/common";
import type IClienteRepository from "src/modules/clientes/repository/ICliente.repository";
import type { ITokenProvider } from "src/shared/services/jwt/ITokenProvider";

type LoginPayload = {
    param: string;
    password: string;
}


@Injectable()
export class LoginClienteService {

    constructor(
        @Inject('IClienteRepository') private readonly clienteRepository: IClienteRepository,
        @Inject('ITokenProvider') private readonly tokenProvider: ITokenProvider
    ) {
    }
    async execute(payload: LoginPayload): Promise<{access_token:string}> {
        return this.tokenProvider.generateToken(payload);
    }

}