import React from "react";

function ExpenseSummary({ expenses }) {

  let total = 0;
  const categoryTotals = {};

  expenses.forEach((expense) => {

    total += expense.amount;

    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }

    categoryTotals[expense.category] += expense.amount;

  });

  return (
    <div>

      <h2>Monthly Summary</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={{ border: "1px solid gray", padding: "15px" }}>
          <h3>Total</h3>
          <p>₹{total}</p>
        </div>

        {Object.keys(categoryTotals).map((cat) => (

          <div
            key={cat}
            style={{ border: "1px solid gray", padding: "15px" }}
          >

            <h3>{cat}</h3>
            <p>₹{categoryTotals[cat]}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ExpenseSummary;