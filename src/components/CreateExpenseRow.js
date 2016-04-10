import React from 'react';
import fecha from 'fecha';
import '../styles/createExpenseRow.css';

const CreateExpenseRow = (props) => {
	const isExpenseValid = (expense) => {
		return expense.description != '' && expense.date != '' & expense.amount != '';
	}

	const createNewExpense = (event)  => {
		const newExpense = {};
		let description = document.getElementById('description').value,
			date = document.getElementById('date').value,
			amount = document.getElementById('amount').value;

		if(event.which === 13) {
			newExpense.description = description;
			newExpense.amount = amount;
			newExpense.date = fecha.format(new Date(date), 'YYYY-MM-DD');
			
			if(isExpenseValid(newExpense)) {
				props.onNewExpense(newExpense);
				document.getElementById('description').value = '';
				document.getElementById('date').value = fecha.format(new Date(), 'YYYY-MM-DD');
				document.getElementById('amount').value = '';
			}
		}
	}

	return (
		<tr className='create-expense-row'>
			<td className='create-expense-row-column'>
				<input
					id='description' 
					type='text' 
					placeholder='Enter expense description'
					onKeyPress={createNewExpense}			
				/>
			</td>
			<td className='create-expense-row-column'>
				<input 
					id='date' 
					defaultValue={fecha.format(new Date(), 'YYYY-MM-DD')}
					type='date'
					onKeyPress={createNewExpense}
				/>
			</td>
			<td className='create-expense-row-column'>
				<input 
					id='amount' 
					type='number' 
					placeholder='Enter amount of expense'
					onKeyPress={createNewExpense}
				 />
			</td>
		</tr>
	);
}

export default CreateExpenseRow;