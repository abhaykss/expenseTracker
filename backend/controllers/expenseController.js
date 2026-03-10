const Expense = require("../models/Expense");

// ADD EXPENSE
const addExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;

    const expense = await Expense.create({
      userId: req.user.id,
      amount,
      category,
      description
    });

    res.status(201).json(expense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET USER EXPENSES
const getExpenses = async (req, res) => {
  try {

    const expenses = await Expense.find({ userId: req.user.id });

    res.json(expenses);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses };