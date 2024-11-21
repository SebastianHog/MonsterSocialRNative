import React, { createContext, useReducer, useContext } from 'react';

type StateType = {
	user: { username: string } | null;
};

type ActionType = {
	type: 'SET_USER';
	payload: { username: string };
};

const initialState: StateType = {
	user: { username: 'ftandard' },
};

const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

const GlobalContext = createContext<{
	state: StateType;
	dispatch: React.Dispatch<ActionType>;
} | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalStore = () => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error('not in a GlobalProvider');
	}
	return context;
};
