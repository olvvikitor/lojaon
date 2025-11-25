export interface ITokenProvider {
    generateToken(payload: object, expiresIn?: string): Promise<{ access_token: string }>;
    verifyToken(token: string): Promise<object | string>;
}