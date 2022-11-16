import { createContext, useReducer } from 'react';

export const ActiveElementContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_ACTIVE': {
			// remove previous active element
			state.activeElement = null;
			return {
				activeElement: action.payload,
			};
		}
		default:
			return state;
	}
};

export const ActiveContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		activeElement: null,
	});

	return (
		<ActiveElementContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ActiveElementContext.Provider>
	);
};
