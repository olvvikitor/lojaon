import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { BcryptService } from "./bycript/bcrypt";

@Module({
    providers: [PrismaService, {provide:'IHashService', useClass:BcryptService}],
    exports: [PrismaService, 'IHashService'],
})
export class SharedModule {}