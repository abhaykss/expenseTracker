import React, { useEffect, useState } from "react";
import API from "../services/api";

import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseSummary from "../components/ExpenseSummary";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ padding: "30px" }}>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Expense Tracker Dashboard
      </h1>

      <ExpenseSummary expenses={expenses} />

      <div style={{ display: "flex", gap: "40px", marginTop: "30px" }}>
        <AddExpense refreshExpenses={fetchExpenses} />
        <ExpenseChart expenses={expenses} />
      </div>

      <div style={{ marginTop: "40px" }}>
        <ExpenseList
          expenses={expenses}
          refreshExpenses={fetchExpenses}
        />
      </div>

    </div>
  );
}

export default Dashboard;