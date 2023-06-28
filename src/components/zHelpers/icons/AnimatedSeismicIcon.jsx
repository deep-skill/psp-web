import React from "react";

const AnimatedSeismicIcon = () => {
	return (
		<React.Fragment>
			<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			role="img"
			preserveAspectRatio="xMidYMid meet"
			id="AnimatedSeismicIcon"
			data-name="AnimatedSeismicIcon"
			height="30"
			width="30"
			viewBox="0 0 30 30"
			fill="none"
			stroke="var(--color-a)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="svg"
		>
			<polyline
				className="back"
				points="2 15, 5 15, 8 8, 11 28, 14 3, 17 21, 20 11, 23 24, 26 15, 29 15"
			></polyline>
			<polyline
				className="front"
				points="2 15, 5 15, 8 8, 11 28, 14 3, 17 21, 20 11, 23 24, 26 15, 29 15"
			></polyline>
			</svg>

			<style>
				{`
				.svg .front {
					stroke: var(--color-d);
					stroke-dasharray: 55, 110;
					stroke-dashoffset: 54;
					animation: define 1.5s linear infinite;
				}
				
				@keyframes define {
					0% {
						opacity: 0.2;
					}
					50% {
						opacity: 1;
					}
					100% {
						opacity: 0;
					}
					to {
						stroke-dashoffset: -110;
					}
				}
				`}
			</style>
		</React.Fragment>
	);
};

export default AnimatedSeismicIcon;
