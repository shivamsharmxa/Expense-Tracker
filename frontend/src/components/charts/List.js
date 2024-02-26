import React, { useState } from "react";
import "boxicons";
import { apiHandler } from "../../service/apiService";

const obj = {
  1: {
    name: "Grocery",
    color: "#9d4edd",
  },
  2: {
    name: "Daily Items",
    color: "#f9c74f",
  },
  3: {
    name: "House Rent",
    color: "rgb(54, 162, 235)",
  },
};

function Transaction({ category, expense }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="download"
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
      <span className="block w-full">{expense.amount ?? ""}</span>
    </div>
  );
}

const UserExpenseList = (expenseList) => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {expenseList.map((expense) => (
        <Transaction
          expnese={expense}
          category={Math.floor(Math.random() * 3) + 1}
        />
      ))}
    </div>
  );
};

const ExpenseList = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  (async function () {
    // userId is hardcoded
    try {
      const response = await apiHandler.fetchExpenseByUserId(1);
      setApiResponse(response);
    } catch (error) {
      setError(error);
    }
  })();

  return (
    <>
      {apiResponse && !error && <UserExpenseList expenseList={apiResponse} />}
    </>
  );
};

export default ExpenseList;
