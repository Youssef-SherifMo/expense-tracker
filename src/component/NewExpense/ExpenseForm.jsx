import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredamount: "",
  //   entereddate: "",
  // });

  const titlechangeHandler = (e) => {
    setInputTitle(e.target.value);
    //setUserInput({...userInput,enteredTitle:e.target.value}); -->worng way to update state
    //correct way to update the state
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle:e.target.value
    //   }
    // });
  };
  const amountchangeHandler = (e) => {
    setInputAmount(e.target.value);
  };
  const datechangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={datechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
