import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	//   enteredTitle: "",
	//   enteredAmount: "",
	//   enteredDate: "",
	// });

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		//setUserInput({...userInput,enteredTitle:e.target.value}); -->wrong way to update state
		//correct way to update the state
		// setUserInput((prevState) => {
		//   return {
		//     ...prevState,
		//     enteredTitle:e.target.value
		//   }
		// });
	};
	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
