import { ProductsService } from './products.service';
import { DashboardStats } from './models/stats.model';
import { CreateProductInput, UpdateProductInput } from './dto/product.dto';
export declare class ProductsResolver {
    private readonly productsService;
    constructor(productsService: ProductsService);
    products(search?: string): Promise<{
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
    product(id: string): Promise<{
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
    createProduct(input: CreateProductInput, user: {
        userId: string;
    }): Promise<{
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
    updateProduct(id: string, input: UpdateProductInput): Promise<{
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
    deleteProduct(id: string): Promise<boolean>;
    dashboardStats(): Promise<DashboardStats>;
}
