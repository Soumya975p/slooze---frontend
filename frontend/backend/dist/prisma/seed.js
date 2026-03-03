"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcryptjs"));
require("dotenv/config");
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('Seeding database...');
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
    const hashedPassword = await bcrypt.hash('Password@123', 10);
    const manager = await prisma.user.create({
        data: {
            email: 'manager@slooze.com',
            password: hashedPassword,
            role: client_1.Role.MANAGER,
        },
    });
    console.log(`Created manager: ${manager.email}`);
    const keeper = await prisma.user.create({
        data: {
            email: 'keeper@slooze.com',
            password: hashedPassword,
            role: client_1.Role.STORE_KEEPER,
        },
    });
    console.log(`Created store keeper: ${keeper.email}`);
    const products = [
        {
            name: 'Crude Oil (Brent)',
            sku: 'CMDTY-OIL-001',
            stock: 5000,
            price: 82.45,
            discount: 2.5,
            purchase: 76.3,
        },
        {
            name: 'Gold Bullion',
            sku: 'CMDTY-GLD-002',
            stock: 350,
            price: 2340.0,
            discount: 0.5,
            purchase: 2100.0,
        },
        {
            name: 'Silver Ingot',
            sku: 'CMDTY-SLV-003',
            stock: 1200,
            price: 29.85,
            discount: 1.0,
            purchase: 26.5,
        },
        {
            name: 'Natural Gas',
            sku: 'CMDTY-GAS-004',
            stock: 8000,
            price: 3.12,
            discount: null,
            purchase: 2.8,
        },
        {
            name: 'Wheat Futures',
            sku: 'CMDTY-WHT-005',
            stock: 15000,
            price: 5.85,
            discount: 3.0,
            purchase: 5.1,
        },
        {
            name: 'Corn Bushels',
            sku: 'CMDTY-CRN-006',
            stock: 20000,
            price: 4.42,
            discount: 2.0,
            purchase: 3.9,
        },
        {
            name: 'Copper Cathode',
            sku: 'CMDTY-CPR-007',
            stock: 2500,
            price: 9.78,
            discount: 1.5,
            purchase: 8.95,
        },
        {
            name: 'Soybeans',
            sku: 'CMDTY-SOY-008',
            stock: 12000,
            price: 13.25,
            discount: null,
            purchase: 11.8,
        },
        {
            name: 'Platinum Bar',
            sku: 'CMDTY-PLT-009',
            stock: 180,
            price: 1015.0,
            discount: 0.75,
            purchase: 920.0,
        },
        {
            name: 'Aluminium Coil',
            sku: 'CMDTY-ALU-010',
            stock: 7500,
            price: 2.48,
            discount: 2.0,
            purchase: 2.1,
        },
    ];
    for (const product of products) {
        const created = await prisma.product.create({
            data: {
                ...product,
                userId: manager.id,
            },
        });
        console.log(`Created product: ${created.name} (${created.sku})`);
    }
    console.log('Seeding complete.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map