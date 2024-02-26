import React, { createContext, useContext, useReducer } from 'react';

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  return (
    <ExpenseContext.Provider value={{ expenses: state.expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpense must be used within an ExpenseProvider');
  }
  return context;
};

export { ExpenseProvider, useExpense };

