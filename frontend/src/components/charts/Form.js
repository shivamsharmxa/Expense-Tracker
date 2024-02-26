import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ExpenseList from "./List";
import AddUsers from "./AddUsers";
import ApiResponseAlert from "./ApiResponseAlert";

import { apiHandler } from "../../service/apiService";

const AddExpense = () => {
  const { register, handleSubmit, resetField } = useForm();
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const onSubmit = async (data) => {
    const { user_id: userId, amount } = data;
    try {
      // Assuming apiHandler.addExpense is an async function
      const response = await apiHandler.addExpense(
        parseInt(userId),
        parseInt(amount)
      );
      setApiResponse(response); // Update state with API response
    } catch (error) {
      console.error("Error adding expense:", error);
      setError("Error adding expense");
      // Handle error (e.g., set error state, show error message)
    }
  };
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Expenses Details</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("user_id")}
              placeholder="User Id"
              className="form-input"
            />
          </div>
          <div className="input-group">
            {" "}
            {/* Add the className attribute here */}
            <input
              type="text"
              {...register("category")}
              placeholder="Category"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="border py-2 text-white bg-indigo-500 w-full"
            >
              Add Details
            </button>
          </div>
        </div>
      </form>
      {apiResponse && !error && <ApiResponseAlert apiResponse={apiResponse} />}
      {error && (
        <div>{error}</div> // Replace this with your error alert component if you have one
      )}
      <ExpenseList></ExpenseList>
      <AddUsers />
    </div>
  );
};

export default AddExpense;
