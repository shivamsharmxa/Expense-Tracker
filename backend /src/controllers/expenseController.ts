import { Request, Response } from "express";
import { expenseHelper } from "../db/helpers/expenseHelper";

export const expenseController = {
  fetchUserExpense: async (req: Request, res: Response) => {
    try {
      const { user_id: userId } = req.body;
      const userExpense = await expenseHelper.fetchUserExpenses(userId);
      return res.json(userExpense);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  addUserExpense: async (req: Request, res: Response) => {
    try {
      const { user_id: userId, amount } = req.body;
      const addExpense = await expenseHelper.addUserExpense(userId, amount);
      if (addExpense)
        return res.json({
          message: "expense added successfully",
        });
    } catch (error) {
      console.log("error in controller");
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
