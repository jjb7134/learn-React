import React from "react";
import AddExpense from "./AddExpense";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onClkCan = () => {};

  const onAdd = () => {};

  let content = (
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancle={onClkCan} />
  );

  if (onClkCan) {
    content = <AddExpense add={onAdd} />;
  } else if (onAdd) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        cancle={onClkCan}
      />
    );
  }
  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
      {content}
    </div>
  );
};

export default NewExpense;
