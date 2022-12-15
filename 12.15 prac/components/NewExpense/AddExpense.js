import React from "react";

function AddExpense(props) {
  const onClickNew = () => {};

  return (
    <div>
      <div className="new-expense__actions">
        <button type="button" onClick={onClickNew}>
          Add New Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
