import { useContext } from 'react';
import { ActiveElementContext } from '../context/ActiveElement';

export const useActiveContext = () => {
	const context = useContext(ActiveElementContext);

	if (!context) {
		throw Error(
			'useActiveContext must be used inside an ActiveContextProvider'
		);
	}

	return context;
};
