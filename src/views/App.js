import React from 'react';
import '../styles/app.css';
import '../../node_modules/normalize.css/normalize.css';
import CreateExpenseRow from '../components/CreateExpenseRow';
import ExpenseRow from '../components/ExpenseRow';
import _ from 'lodash';
import addExpense from '../actions/addExpense';
import deleteExpense from '../actions/deleteExpense';

class App extends React.Component {
	constructor (props) {
		super(props);

		let initialState;

		try {
			initialState = JSON.parse(window.localStorage.getItem('expenses'));
		} catch (e) {}


		this.state = initialState || {
			expenses: {},
			lastId: 0
		};
	}

	updateState = (nextState) => {
		this.setState(nextState);

		window.localStorage.setItem('expenses', JSON.stringify(nextState));
	};

	handleCreateNewExpense = (expense) => {
		const nextState = addExpense(this.state, expense);

		this.updateState(nextState);
	};

	handleDeleteExpenseRow = (expense) => {
		const nextState = deleteExpense(this.state, expense);
		
		this.updateState(nextState);
	};

	render () {
		const expenses = this.state.expenses;

		return (
			<div className='app'>
				<div className='app-header'>
					Money Manager
				</div>

				<table className='expense-table'>
					<thead>
						<tr>
							<th className='addExpenseTableHeading' >Description</th>
							<th className='addExpenseTableHeading' >Date</th>
							<th className='addExpenseTableHeading' >Amount (INR)</th>
						</tr>
					</thead>

					<tbody>
						<CreateExpenseRow 
							onNewExpense={this.handleCreateNewExpense}
						/>
						
						{_.map(expenses, (expense) => {
							return (
								<ExpenseRow 
									expense={expense}
									key={expense.id}
									onDeleteExpenseRow={this.handleDeleteExpenseRow} 
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}	
}

export default App;