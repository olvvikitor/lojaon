import { Module } from "@nestjs/common";

import { ClienteController } from "./controllers/cliente.controller";
import { CreateClienteService } from "./services/create-cliente.service";
import { ClienteRepository } from "./repository/cliente.repository";
import { SharedModule } from "src/shared/services/shared.module";
import { FindByEmailService } from "./services/find-by-email";

@Module({
    imports: [SharedModule],
    controllers: [ClienteController],
    providers: [
        CreateClienteService,
        FindByEmailService,
        {
            provide: 'IClienteRepository',
            useClass: ClienteRepository
        }
    ],
    exports: [CreateClienteService,FindByEmailService, 'IClienteRepository'],
})
export class ClienteModule {}
