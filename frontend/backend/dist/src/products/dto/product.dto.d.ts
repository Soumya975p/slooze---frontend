export declare class CreateProductInput {
    name: string;
    sku: string;
    stock: number;
    price: number;
    discount?: number;
    purchase?: number;
}
declare const UpdateProductInput_base: import("@nestjs/common").Type<Partial<CreateProductInput>>;
export declare class UpdateProductInput extends UpdateProductInput_base {
}
export {};
