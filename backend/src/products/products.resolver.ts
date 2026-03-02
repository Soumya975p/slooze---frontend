import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './models/product.model';
import { DashboardStats } from './models/stats.model';
import { CreateProductInput, UpdateProductInput } from './dto/product.dto';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/models/user.model';
import { CurrentUser } from '../auth/current-user.decorator';

@Resolver(() => Product)
@UseGuards(GqlAuthGuard, RolesGuard)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  @Roles(Role.MANAGER, Role.STORE_KEEPER)
  async products(@Args('search', { nullable: true }) search?: string) {
    return this.productsService.findAll(search);
  }

  @Query(() => Product)
  @Roles(Role.MANAGER, Role.STORE_KEEPER)
  async product(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  @Roles(Role.MANAGER)
  async createProduct(
    @Args('input') input: CreateProductInput,
    @CurrentUser() user: { userId: string },
  ) {
    return this.productsService.create(input, user.userId);
  }

  @Mutation(() => Product)
  @Roles(Role.MANAGER)
  async updateProduct(
    @Args('id') id: string,
    @Args('input') input: UpdateProductInput,
  ) {
    return this.productsService.update(id, input);
  }

  @Mutation(() => Boolean)
  @Roles(Role.MANAGER)
  async deleteProduct(@Args('id') id: string) {
    return this.productsService.delete(id);
  }

  @Query(() => DashboardStats)
  @Roles(Role.MANAGER)
  async dashboardStats() {
    return this.productsService.getDashboardStats();
  }
}
