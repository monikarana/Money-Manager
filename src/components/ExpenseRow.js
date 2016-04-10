import React from 'react';
import '../styles/expenseRow.css';

const ExpenseRow = (props) => {
	const expense = props.expense;

	return (
		<tr className="expense-row">
			<td className="expense-row-column">
				{expense.description}
			</td>
			<td className="expense-row-column">
				{expense.date.toDateString()}
			</td>
			<td className="expense-row-column">
				{expense.amount}
			</td>
		</tr>
	);
}

export default ExpenseRow;