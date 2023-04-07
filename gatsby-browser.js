export const onClientEntry = () => {
	// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
	if (typeof window.IntersectionObserver === `undefined`) {
		import(`intersection-observer`);
	}
};

export default () => {}