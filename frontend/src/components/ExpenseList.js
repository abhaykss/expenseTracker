import React from "react";
import API from "../services/api";

function ExpenseList({ expenses, refreshExpenses }) {

  const deleteExpense = async (id) => {

    try {

      await API.delete(`/expenses/${id}`);

      refreshExpenses();   // auto refresh after delete

    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div>

      <h2>Expense List</h2>

      {expenses.length === 0 && (
        <p>No expenses yet</p>
      )}

      {expenses.map((expense) => (

        <div
          key={expense._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid gray",
            padding: "10px"
          }}
        >

          <span>₹{expense.amount}</span>

          <span>{expense.category}</span>

          <span>{expense.description}</span>

          <button
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer"
            }}
            onClick={() => deleteExpense(expense._id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ExpenseList;