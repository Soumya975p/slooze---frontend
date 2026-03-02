require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashed = await bcrypt.hash('Soumya@123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'soumya384p@gmail.com' },
    update: { password: hashed, role: 'MANAGER' },
    create: { email: 'soumya384p@gmail.com', password: hashed, role: 'MANAGER' },
  });
  console.log('Done:', user.email, '| role:', user.role);
  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
