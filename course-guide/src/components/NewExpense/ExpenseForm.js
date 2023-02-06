import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm() {
  //   multiple state approach

  //   const [enteredTitle,setEnteredTitile] = useState("");
  //   const [enteredAmount,setEnteredAmount] = useState("");
  //   const [enteredDate,setEnteredDate] = useState("");

  //single state approach

  const [userEntry, setUserEntry] = useState({
    enteredAmount: "",
    enteredDate: "",
    enteredTitle: "",
  });

  const titleChangeHandler = function (event) {
    console.log(event.target.value.lenght);
    setUserEntry((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = function (event) {
    setUserEntry((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = function (event) {
    setUserEntry((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  return (
    <form>
      <div className="new-expense___controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            max="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
