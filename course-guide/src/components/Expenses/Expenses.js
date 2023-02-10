import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");

  const newArray = expenses.filter((item) => {
    return item.date.getFullYear() === Number(filterYear);
  });

  const getFilterchange = function (selectedYear) {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={getFilterchange} year={filterYear} />
        <ExpensesChart expenses={newArray} />
        <ExpensesList array={newArray} />
      </Card>
    </div>
  );
}

export default Expenses;
