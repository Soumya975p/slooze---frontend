import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from './dto/product.dto';
import { DashboardStats } from './models/stats.model';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(search?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        sku: string;
        stock: number;
        price: number;
        discount: number | null;
        purchase: number | null;
        userId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        sku: string;
        stock: number;
        price: number;
        discount: number | null;
        purchase: number | null;
        userId: string;
    }>;
    create(input: CreateProductInput, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        sku: string;
        stock: number;
        price: number;
        discount: number | null;
        purchase: number | null;
        userId: string;
    }>;
    update(id: string, input: UpdateProductInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        sku: string;
        stock: number;
        price: number;
        discount: number | null;
        purchase: number | null;
        userId: string;
    }>;
    delete(id: string): Promise<boolean>;
    getDashboardStats(): Promise<DashboardStats>;
}
