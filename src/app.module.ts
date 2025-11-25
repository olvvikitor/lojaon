import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { SharedModule } from './shared/services/shared.module';
import { LoginClienteModule } from './modules/login-cliente/login.module';

@Module({
  imports: [SharedModule, ClienteModule, LoginClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
