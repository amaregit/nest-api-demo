export declare class UsersService {
    private prisma;
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
    getUserById(id: number): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
    updateUser(id: number, data: {
        name?: string;
        email?: string;
    }): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
    deleteUser(id: number): Promise<{
        name: string;
        id: number;
        email: string;
        password: string;
    }>;
}
