import bcrypt from 'bcrypt';
import IHashService from './IHashService';

export class BcryptService implements IHashService {
    constructor(private readonly saltRounds: number = 10) {}
    hash(data: string): Promise<string> {
        return bcrypt.hash(data, this.saltRounds);
    }
    compare(data: string, hashed: string): Promise<boolean> {
        return bcrypt.compare(data, hashed);
    }
}

