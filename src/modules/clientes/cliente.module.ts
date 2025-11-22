import { Module } from "@nestjs/common";

import { ClienteController } from "./controllers/cliente.controller";
import { CreateClienteService } from "./services/create-cliente.service";
import { ClienteRepository } from "./repository/cliente.repository";
import { SharedModule } from "src/shared/services/shared.module";

@Module({
    imports: [SharedModule],
    controllers: [ClienteController],
    providers: [
        CreateClienteService,
        {
            provide: 'IClienteRepository',
            useClass: ClienteRepository
        }
    ],
    exports: [CreateClienteService, 'IClienteRepository'],
})
export class ClienteModule {}
