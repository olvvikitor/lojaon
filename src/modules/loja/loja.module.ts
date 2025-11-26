import { Module } from "@nestjs/common";
import { SharedModule } from "src/shared/services/shared.module";

@Module({
    imports: [
        SharedModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class LojaModule {}