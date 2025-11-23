import { CreateClienteDto } from "../dtos/create-cliente-dto";
import { Cliente } from "./Cliente.entity";

export class ClienteMapper {

  static toDomain(dto: CreateClienteDto): Cliente {
    const cliente:Cliente = new Cliente(
      null,
      dto.name,
      dto.cpf,
      dto.email,
      dto.password,
      dto.telefone);
      return cliente;
  }

  static toPrisma(clienteDomain: Cliente) {
    const cliente = clienteDomain.getProperties()
    return {
      id: cliente.id,
      email: cliente.email,
      password: cliente.password,
      name: cliente.name,
      cpf: cliente.cpf,
      telefone: cliente.telefone
    };
  }

  static toDomainFromPrisma(raw: any): Cliente {
    console.log(raw)
    return new Cliente(
      raw.id,
      raw.name,
      raw.cpf,
      raw.email,
      raw.password,
      raw.telefone
    );
  }
}
