import axios from "axios";

const API_BASE_URL = `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`;

console.log(API_BASE_URL);
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const apiHandler = {
  addExpense: async (userId, amount) => {
    try {
      const response = await apiService.post("/expense/add", {
        user_id: userId,
        amount,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  fetchExpenseByUserId: async (userId) => {
    try {
      const fetchedExpense = await apiService.get("/expense/");
      return fetchedExpense;
    } catch (error) {}
  },
};
