import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");

  const newArray = expenses.filter((item) => {
    return item.date.getFullYear() === Number(filterYear);
  });

  const getFilterchange = function (selectedYear) {
    setFilterYear(selectedYear);
  };

  let expenseContent = <p>No expense here</p>;

  if (newArray.length > 0) {
    expenseContent = newArray.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={getFilterchange} year={filterYear} />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
