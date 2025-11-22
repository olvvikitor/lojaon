import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { SharedModule } from './shared/services/shared.module';

@Module({
  imports: [SharedModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
