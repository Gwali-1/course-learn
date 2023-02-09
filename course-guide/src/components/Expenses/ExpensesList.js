import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let expenseContent = <p>No expense here</p>;

  if (props.array.length > 0) {
    expenseContent = props.array.map((item) => {
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
}

export default ExpensesList;
