import { Role } from '@prisma/client';
export { Role };
export declare class User {
    id: string;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
