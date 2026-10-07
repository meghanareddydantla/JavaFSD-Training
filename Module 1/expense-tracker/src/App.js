import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Groceries", amount: -50 },
    { id: 2, title: "Salary", amount: 2300 },
    { id: 3, title: "Phone", amount: -1000 }
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((total, item) => total + Math.abs(item.amount), 0);

  const balance = income - expense;

  const addTransaction = (e) => {
    e.preventDefault();

    if (title === "" || amount === "" || type === "") {
      alert("Please enter all details");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: type === "income" ? Number(amount) : -Number(amount)
    };

    setTransactions([newTransaction, ...transactions]);

    setTitle("");
    setAmount("");
    setType("");
  };

  return (
    <div className="page">

      <div className="container">

        <h1>Expense Tracker</h1>

        {/* SUMMARY */}
        <div className="summary">

          <div className="balance">
            <h3>YOUR BALANCE</h3>
            <h2>₹{balance.toFixed(2)}</h2>
          </div>

          <h2 className="summary-title">SUMMARY</h2>

          <div className="summary-box">

            <div>
              <h3>INCOME</h3>
              <p className="income">
                ₹{income.toFixed(2)}
              </p>
            </div>

            <div className="line"></div>

            <div>
              <h3>EXPENSE</h3>
              <p className="expense">
                ₹{expense.toFixed(2)}
              </p>
            </div>

          </div>
        </div>

        {/* HISTORY */}
        <div className="history">

          <h2>History</h2>

          <hr />

          {transactions.map((transaction) => (
            <div
              className={`transaction ${
                transaction.amount > 0 ? "income-border" : "expense-border"
              }`}
              key={transaction.id}
            >

              <span>{transaction.title}</span>

              <span>
                {transaction.amount > 0 ? "+" : "-"}₹
                {Math.abs(transaction.amount).toFixed(2)}
              </span>

            </div>
          ))}

        </div>

        {/* ADD TRANSACTION */}
        <div className="add-section">

          <h2>Add new transaction</h2>

          <hr />

          <form onSubmit={addTransaction}>

            <label>Title</label>

            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Amount</label>

            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="radio">

              <label>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={type === "income"}
                  onChange={(e) => setType(e.target.value)}
                />
                Income
              </label>

              <label>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === "expense"}
                  onChange={(e) => setType(e.target.value)}
                />
                Expense
              </label>

            </div>

            <button type="submit">
              Add transaction
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default App;