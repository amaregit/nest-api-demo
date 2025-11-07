import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService);
    signup(email: string, password: string, name: string): Promise<{
        name: string;
        id: number;
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    validateUser(payload: any): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
}
