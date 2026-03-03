"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(search) {
        return this.prisma.product.findMany({
            where: search
                ? { name: { contains: search, mode: 'insensitive' } }
                : undefined,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException(`Product #${id} not found`);
        return product;
    }
    async create(input, userId) {
        return this.prisma.product.create({
            data: { ...input, userId },
        });
    }
    async update(id, input) {
        await this.findOne(id);
        return this.prisma.product.update({ where: { id }, data: input });
    }
    async delete(id) {
        await this.findOne(id);
        await this.prisma.product.delete({ where: { id } });
        return true;
    }
    async getDashboardStats() {
        const products = await this.prisma.product.findMany({
            include: { createdBy: true },
        });
        const totalEarnings = products.reduce((sum, p) => sum + p.price * p.stock, 0);
        const totalRevenue = products.reduce((sum, p) => sum + (p.purchase ?? p.price * 0.8) * p.stock, 0);
        const totalSales = products.length;
        const subscriptions = Math.floor(totalSales * 10.3);
        const recentSales = products
            .sort((a, b) => b.price * b.stock - a.price * a.stock)
            .slice(0, 5)
            .map((p) => ({
            name: p.name,
            email: p.createdBy.email,
            amount: p.price * p.stock,
        }));
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthlySalesData = months.map((month, i) => ({
            month,
            value: Math.round((totalEarnings / 12) * (0.7 + ((i * 37) % 60) / 100)),
        }));
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const weeklyOverviewData = days.map((day, i) => ({
            day,
            revenue: Math.round((totalEarnings / 7) * (0.8 + ((i * 17) % 40) / 100)),
            expenses: Math.round((totalRevenue / 7) * (0.75 + ((i * 23) % 50) / 100)),
        }));
        return {
            totalEarnings,
            totalSales,
            totalRevenue,
            subscriptions,
            recentSales,
            monthlySalesData,
            weeklyOverviewData,
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map