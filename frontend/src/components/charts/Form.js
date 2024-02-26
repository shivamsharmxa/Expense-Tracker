import React from 'react';
import { useForm } from 'react-hook-form';
import { useExpense} from '../context/ExpenseContext';

const AddExpense = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { addExpense, expenses } = useExpense();

  const contributor = watch('contributor');

  const onSubmit = (data) => {
    const { category, contributionAmount, yourAmount } = data;

    addExpense({
      category,
      contributor,
      contributionAmount,
      yourAmount,
      date: new Date(),
    });
  };

  const handleContributorChange = (selectedContributor) => {
    setValue("contributor", selectedContributor);

    // If a contributor is selected, show the "Contribution Amount" input
    if (selectedContributor) {
      setValue("contributionAmount", ""); // Reset the value if needed
    }
  };

  return (
    <div className="container mx-auto max-w-screen-md p-8">
      <h1 className="font-bold text-2xl text-center mb-8">Add Expense</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <label htmlFor="contributor" className="text-sm">
              Select Contributor
            </label>
            <select
              {...register("contributor")}
              className="form-input"
              onChange={(e) => handleContributorChange(e.target.value)}
            >
              <option value="" defaultValue>
                Choose contributor
              </option>
              <option value="Shivam">Shivam</option>
              <option value="Vinay">Vinay</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {contributor && (
            <div className="input-group">
              <label htmlFor="contributionAmount" className="text-sm">
                Contribution Amount
              </label>
              <input
                type="number"
                {...register("contributionAmount", { required: true })}
                placeholder="Enter contribution amount"
                className="form-input"
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="category" className="text-sm">
              Category
            </label>
            <input
              type="text"
              {...register("category", { required: true })}
              placeholder="Enter category"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="yourAmount" className="text-sm">
              Your Amount
            </label>
            <input
              type="number"
              {...register("yourAmount", { required: true })}
              placeholder="Enter your amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button
              type="button" // Change 'submit' to 'button'
              onClick={handleSubmit(onSubmit)}
              className="bg-indigo-500 text-white py-2 px-4 w-full rounded hover:bg-indigo-600"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
      {expenses.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Transaction Details:</h2>
          <table className="w-full border-collapse border rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Contributor</th>
                {contributor && (
                  <th className="py-2 px-4 border">Contribution Amount</th>
                )}
                <th className="py-2 px-4 border">Your Amount</th>
                <th className="py-2 px-4 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} className="border">
                  <td className="py-2 px-4 border">{expense.category}</td>
                  <td className="py-2 px-4 border">{expense.contributor}</td>
                  {contributor && (
                    <td className="py-2 px-4 border">
                      {expense.contributionAmount}
                    </td>
                  )}
                  <td className="py-2 px-4 border">{expense.yourAmount}</td>
                  <td className="py-2 px-4 border">
                    {expense.date.toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddExpense;
