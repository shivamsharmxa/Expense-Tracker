import React from "react";
import "./App.css";
import Graph from "./components/charts/Graph";
import AddExpense from "./components/charts/Form";
import { ExpenseProvider } from "./components/context/ExpenseContext"; 

function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
          <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
            Expense Tracker
          </h1>

          {/* grid columns */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Chart */}
            <Graph />
            {/* Form */}
            <AddExpense />
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
