import { useEffect, useState } from 'react';

// Custom hook to check if an element is visible into scroll using Intersection Observer API
export const useIntersection = (ref) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setVisible(entry.isIntersecting);
		});

		observer.observe(ref.current);
	}, []);

	return { visible };
};
