import React from 'react';
import '../styles/expenseRow.css';

const ExpenseRow = (props) => {
	const expense = props.expense;

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
				{expense.date.toDateString()}
			</td>
			<td className='expense-row-column'>
				{expense.amount}
			</td>
		</tr>
	);
}

export default ExpenseRow;