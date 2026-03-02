import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class RecentSale {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Float)
  amount: number;
}

@ObjectType()
export class MonthlyStat {
  @Field()
  month: string;

  @Field(() => Float)
  value: number;
}

@ObjectType()
export class WeeklyStat {
  @Field()
  day: string;

  @Field(() => Float)
  revenue: number;

  @Field(() => Float)
  expenses: number;
}

@ObjectType()
export class DashboardStats {
  @Field(() => Float)
  totalEarnings: number;

  @Field(() => Int)
  totalSales: number;

  @Field(() => Float)
  totalRevenue: number;

  @Field(() => Int)
  subscriptions: number;

  @Field(() => [RecentSale])
  recentSales: RecentSale[];

  @Field(() => [MonthlyStat])
  monthlySalesData: MonthlyStat[];

  @Field(() => [WeeklyStat])
  weeklyOverviewData: WeeklyStat[];
}
