import { JwtService } from "@nestjs/jwt";
import { ITokenProvider } from "./ITokenProvider";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class JwtServiceToken implements ITokenProvider {
    constructor(
        @Inject() private jwtService: JwtService

    ) { }
    async generateToken(payload: object): Promise<{ access_token: string }> {
        console.log('payload no jwt service', payload);
        const access_token = await this.jwtService.signAsync(payload)
        return {
            access_token: access_token
        };
    }
    verifyToken(token: string): Promise<object | string> {
        throw new Error("Method not implemented.");
    }

}
