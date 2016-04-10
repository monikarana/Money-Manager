export default (state, expense) => {
	delete state.expenses[expense.id];

	return state;
};