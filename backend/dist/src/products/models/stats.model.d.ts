export declare class RecentSale {
    name: string;
    email: string;
    amount: number;
}
export declare class MonthlyStat {
    month: string;
    value: number;
}
export declare class WeeklyStat {
    day: string;
    revenue: number;
    expenses: number;
}
export declare class DashboardStats {
    totalEarnings: number;
    totalSales: number;
    totalRevenue: number;
    subscriptions: number;
    recentSales: RecentSale[];
    monthlySalesData: MonthlyStat[];
    weeklyOverviewData: WeeklyStat[];
}
