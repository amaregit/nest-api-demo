import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }[]>;
    createUser(data: {
        name: string;
        email: string;
    }): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
    getUserById(id: string): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
    updateUser(id: string, data: {
        name?: string;
        email?: string;
    }): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
    deleteUser(id: string): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
}
