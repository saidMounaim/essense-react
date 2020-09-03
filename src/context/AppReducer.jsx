export const initialState = {
	popularProducts: [],
	cart: [],
};

function AppReducer(state, action) {
	switch (action.type) {
		case 'FETCH_POPULAR_PRODUCTS':
			return {
				...state,
				popularProducts: action.payload,
			};
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case 'REMOVE_TO_CART':
			return {
				...state,
				cart: action.payload,
			};
		default:
			return state;
	}
}

export default AppReducer;
