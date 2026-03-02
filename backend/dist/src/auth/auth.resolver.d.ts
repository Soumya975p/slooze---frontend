import { AuthService } from './auth.service';
import { AuthPayload } from './dto/auth.dto';
import { Role } from './models/user.model';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string): Promise<AuthPayload>;
    register(email: string, password: string, role?: Role): Promise<AuthPayload>;
    me(user: {
        userId: string;
    }): Promise<{
        id: string;
        email: string;
        password: string | null;
        role: import("@prisma/client").$Enums.Role;
        provider: string | null;
        providerId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
