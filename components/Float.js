import React, { useContext } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';

import PageContext from '../pageContext';

const style = {
	transform: 'translate3d(0,0,0)',
	position: 'absolute',
	backgroundSize: 'contain',
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	willChange: 'transform',
};

const floatWithParallax = ({ parallax, float, multi = 1 }) => {
	return `
		translate3d(
			${((parallax.x * multi + float.x) / -100) * multi}px,
			${((parallax.y * multi + float.y) / 100) * multi}px,
			0
		)
	`;
};

const random = (min, max) => Math.random() * (max - min) + min;

export default ({
	children,
	className,
	mouse,
	multi,
	invert,
	section,
	duration,
}) => {
	const { current, loaded } = useContext(PageContext);

	const animateSection =
		loaded && typeof section === 'object'
			? section.includes(current)
			: current === section;

	const invertValue = invert ? -1 : 1;

	const animate = useSpring({
		to: async next => {
			while (true) {
				await next({
					x: random(-1000, 1000),
					y: random(-1000, 1000),
				});
			}
		},
		from: { x: 0, y: 0 },
		reset: true,
		reverse: true,
		config: {
			duration: duration * 100 || 60000,
		},
	});

	const animation = interpolate(
		[mouse.x, mouse.y, animate.x, animate.y],
		(x, y, fX, fY) =>
			floatWithParallax({
				parallax: {
					x: x * invertValue,
					y: y * invertValue,
				},
				float: {
					x: fX * invertValue,
					y: fY * invertValue,
				},
				multi,
			}),
	);

	return (
		<animated.div
			style={{
				...style,
				transition: `all 2s ease`,
				transform: animateSection ? animation : `translate3d(0, 0, 0)`,
			}}
			className={className}
		>
			{children}
		</animated.div>
	);
};
