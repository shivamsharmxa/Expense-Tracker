"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseHelper = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.expenseHelper = {
    fetchUserExpenses: function (userId, expenseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let whereCondition = {
                user_id: userId,
            };
            if (expenseId !== undefined) {
                whereCondition["expense_id"] = expenseId;
            }
            return yield prisma.expense.findMany({
                relationLoadStrategy: "join",
                include: {
                    user_expense: {
                        where: whereCondition,
                    },
                },
            });
        });
    },
    addUserExpense: function (userId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.expense.create({
                data: {
                    user_expense: {
                        create: {
                            user_id: userId,
                            amount: amount,
                        },
                    },
                },
            });
        });
    },
};
