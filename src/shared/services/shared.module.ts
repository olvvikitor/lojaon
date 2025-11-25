import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { BcryptService } from "./bycript/bcrypt";
import { JwtServiceToken } from "./jwt/JwtService";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule], // Importa o módulo de configuração
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'), // Obtém o segredo do arquivo de configuração
                signOptions: { expiresIn: '7d' }, // Tempo de expiração configurável
            }),
            inject: [ConfigService], // Injeta o serviço de configuração
        }),
    ],
    providers: [PrismaService,
        { provide: 'IHashService', useClass: BcryptService },
        { provide: 'ITokenProvider', useClass: JwtServiceToken }],
    exports: [PrismaService, 'IHashService', 'ITokenProvider'],
})
export class SharedModule { }