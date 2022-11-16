import { useEffect } from 'react';
import { useActiveContext } from '../../hooks/useActiveContext';

// A helper container to wrap around all the section
// and keep track of which children is visible
const ActiveElementContainer = ({ children, visible, active }) => {
	const { dispatch } = useActiveContext();

	// set the active element if it's visible
	useEffect(() => {
		if (visible) {
			dispatch({ type: 'SET_ACTIVE', payload: active });
		}
	}, [visible]);

	return <>{children}</>;
};
export default ActiveElementContainer;
