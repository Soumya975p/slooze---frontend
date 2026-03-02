import { User } from '../models/user.model';
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class AuthPayload {
    access_token: string;
    user: User;
}
