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
exports.DashboardStats = exports.WeeklyStat = exports.MonthlyStat = exports.RecentSale = void 0;
const graphql_1 = require("@nestjs/graphql");
let RecentSale = class RecentSale {
    name;
    email;
    amount;
};
exports.RecentSale = RecentSale;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RecentSale.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RecentSale.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], RecentSale.prototype, "amount", void 0);
exports.RecentSale = RecentSale = __decorate([
    (0, graphql_1.ObjectType)()
], RecentSale);
let MonthlyStat = class MonthlyStat {
    month;
    value;
};
exports.MonthlyStat = MonthlyStat;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MonthlyStat.prototype, "month", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], MonthlyStat.prototype, "value", void 0);
exports.MonthlyStat = MonthlyStat = __decorate([
    (0, graphql_1.ObjectType)()
], MonthlyStat);
let WeeklyStat = class WeeklyStat {
    day;
    revenue;
    expenses;
};
exports.WeeklyStat = WeeklyStat;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeeklyStat.prototype, "day", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], WeeklyStat.prototype, "revenue", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], WeeklyStat.prototype, "expenses", void 0);
exports.WeeklyStat = WeeklyStat = __decorate([
    (0, graphql_1.ObjectType)()
], WeeklyStat);
let DashboardStats = class DashboardStats {
    totalEarnings;
    totalSales;
    totalRevenue;
    subscriptions;
    recentSales;
    monthlySalesData;
    weeklyOverviewData;
};
exports.DashboardStats = DashboardStats;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], DashboardStats.prototype, "totalEarnings", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DashboardStats.prototype, "totalSales", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], DashboardStats.prototype, "totalRevenue", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DashboardStats.prototype, "subscriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [RecentSale]),
    __metadata("design:type", Array)
], DashboardStats.prototype, "recentSales", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MonthlyStat]),
    __metadata("design:type", Array)
], DashboardStats.prototype, "monthlySalesData", void 0);
__decorate([
    (0, graphql_1.Field)(() => [WeeklyStat]),
    __metadata("design:type", Array)
], DashboardStats.prototype, "weeklyOverviewData", void 0);
exports.DashboardStats = DashboardStats = __decorate([
    (0, graphql_1.ObjectType)()
], DashboardStats);
//# sourceMappingURL=stats.model.js.map