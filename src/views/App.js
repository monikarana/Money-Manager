import React from 'react';
import '../styles/app.css';
import '../../node_modules/normalize.css/normalize.css';
import CreateExpenseRow from '../components/CreateExpenseRow';
import ExpenseRow from '../components/ExpenseRow';
import _ from 'lodash';
import addExpense from '../actions/addExpense';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			expenses: {},
			lastId: 0
		};
	}

	handleCreateNewExpense = (expense) => {
		const nextState = addExpense(this.state, expense);

		this.setState(nextState);

		console.log('Creating new Expnese ', this.state);
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