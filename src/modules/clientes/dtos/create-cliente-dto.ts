import { IsEmail, IsString, Length } from "class-validator";

export class CreateClienteDto{

    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    @Length(11,14)
    cpf: string;
    @IsString()
    @Length(11,12)
    telefone?: string;
}