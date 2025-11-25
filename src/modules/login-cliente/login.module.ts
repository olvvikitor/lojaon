import { Module } from "@nestjs/common";
import { ClienteModule } from "../clientes/cliente.module";
import { LoginClienteController } from "./controller/login.controller-cliente";
import { JwtModule } from "@nestjs/jwt";
import { LoginClienteService } from "./services/login-cliente.service";
import { SharedModule } from "src/shared/services/shared.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [ClienteModule,
        SharedModule
    ],
    controllers: [LoginClienteController],
    providers: [LoginClienteService],
    exports: []
})
export class LoginClienteModule { }