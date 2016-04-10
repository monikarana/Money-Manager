import React from 'react';
import '../styles/expenseRow.css';
import fecha from 'fecha';

const ExpenseRow = (props) => {
	const expense = props.expense;
	const date = fecha.format(fecha.parse(expense.date, 'YYYY-MM-DD'), 'mediumDate');

	const onDeleteExpenseRow = () => {
		props.onDeleteExpenseRow(expense);
	}

	return (
		<tr className='expense-row'>
			<td className='expense-row-column'>
				<span 
					className="delete-expense-row" 
					onClick={onDeleteExpenseRow}
				>
					X
				</span>
				{expense.description}
			</td>
			<td className='expense-row-column'>
				{date}
			</td>
			<td className='expense-row-column'>
				{expense.amount}
			</td>
		</tr>
	);
}

export default ExpenseRow;