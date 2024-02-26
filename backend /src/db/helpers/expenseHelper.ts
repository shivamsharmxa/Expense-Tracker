import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const expenseHelper = {
  fetchUserExpenses: async function (userId: number, expenseId?: number) {
    let whereCondition: {
      user_id: number;
      [key: string]: number;
    } = {
      user_id: userId,
    };

    if (expenseId !== undefined) {
      whereCondition["expense_id"] = expenseId;
    }

    return await prisma.expense.findMany({
      relationLoadStrategy: "join",
      include: {
        user_expense: {
          where: whereCondition,
        },
      },
    });
  },
  addUserExpense: async function (userId: number, amount: number) {
    return await prisma.expense.create({
      data: {
        user_expense: {
          create: {
            user_id: userId,
            amount: amount,
          },
        },
      },
    });
  },
};
