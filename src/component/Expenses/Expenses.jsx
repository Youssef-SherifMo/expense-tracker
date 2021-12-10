import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpenseList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
