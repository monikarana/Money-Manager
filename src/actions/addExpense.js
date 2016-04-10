import _ from 'lodash';

export default (state, expense) => {
	const id = state.lastId + 1;

	expense.id = id;
	state.lastId = id;
	state.expenses[id] = expense;

	return state;
};