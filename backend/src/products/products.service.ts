import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from './dto/product.dto';
import { DashboardStats } from './models/stats.model';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(search?: string) {
    return this.prisma.product.findMany({
      where: search
        ? { name: { contains: search, mode: 'insensitive' } }
        : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  async create(input: CreateProductInput, userId: string) {
    return this.prisma.product.create({
      data: { ...input, userId },
    });
  }

  async update(id: string, input: UpdateProductInput) {
    await this.findOne(id);
    return this.prisma.product.update({ where: { id }, data: input });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.product.delete({ where: { id } });
    return true;
  }

  async getDashboardStats(): Promise<DashboardStats> {
    const products = await this.prisma.product.findMany({
      include: { createdBy: true },
    });

    const totalEarnings = products.reduce(
      (sum, p) => sum + p.price * p.stock,
      0,
    );
    const totalRevenue = products.reduce(
      (sum, p) => sum + (p.purchase ?? p.price * 0.8) * p.stock,
      0,
    );
    const totalSales = products.length;
    const subscriptions = Math.floor(totalSales * 10.3);

    // Recent sales: top 5 products by value as "sales"
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
}
