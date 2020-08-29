export const initialState = {
	popularProducts: [],
};

function AppReducer(state, action) {
	switch (action.type) {
		case 'FETCH_POPULAR_PRODUCTS':
			return {
				...state,
				popularProducts: action.payload,
			};
		default:
			return state;
	}
}

export default AppReducer;
