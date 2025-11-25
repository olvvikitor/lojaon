import { Body, Controller, Post } from "@nestjs/common";
import { LoginClienteService } from "../services/login-cliente.service";
import { LoginClieteDto } from "../dto/login-cliente.dto";

@Controller('login-cliente')
export class LoginClienteController {
    constructor(
        private readonly loginClienteService: LoginClienteService
    ){}

    @Post('generate-token')
    async login(@Body() payload:LoginClieteDto):Promise<{access_token:string}>{
        return await this.loginClienteService.execute({param: payload.param, password: payload.password});
    }
}