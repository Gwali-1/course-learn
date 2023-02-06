import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
  const [heading, setTitle] = useState(title);

  const changeTitle = function () {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div clasName="expense-item__description">
        <h2>{heading}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
