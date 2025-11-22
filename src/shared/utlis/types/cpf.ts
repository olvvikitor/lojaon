import { BadRequestException } from "@nestjs/common";

export class CPF {
  private readonly value: string;

  constructor(value: string) {
    const clean = CPF.clean(value);

    if (!CPF.isValid(clean)) {
      throw new BadRequestException("CPF inválido");
    }

    this.value = clean;
  }

  public getValue(): string {
    return this.value;
  }

  static clean(value: string): string {
    return value.replace(/\D/g, "");
  }

  static isValid(cpf: string): boolean {
    if (!cpf || cpf.length !== 11) return false;

    // CPF inválido por repetição
    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
  }
}
