import React, { useState } from "react";
import API from "../services/api";

function AddExpense({ refreshExpenses }) {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExpense = async () => {
    try {

      await API.post("/expenses", {
        amount,
        category,
        description
      });

      // refresh dashboard data
      refreshExpenses();

      // reset form
      setAmount("");
      setCategory("");
      setDescription("");

    } catch (error) {
      console.error(error);
      alert("Error adding expense");
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "20px", borderRadius: "10px" }}>

      <h2>Add Expense</h2>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddExpense}>
        Add Expense
      </button>

    </div>
  );
}

export default AddExpense;