import React, { useContext } from 'react'
import styled, { ThemeContext, keyframes } from 'styled-components';

const LoadingSpinner = () => {
	const themeContext = useContext(ThemeContext)
	return (
		<DivSpinner>
			<SvgSpinner
				viewBox="0 0 50 50"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					className="path"
					fill="none"
					stroke={themeContext.success}
					strokeWidth={3}
					strokeLinecap="round"
					cx="25"
					cy="25"
					r="20"
				/>
			</SvgSpinner>
		</DivSpinner>
	);
}

const DivSpinner = styled.div`
  position: fixed;
  top: 41%;
  left: 50%;
`;

const rotator = keyframes`
   100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const SvgSpinner = styled.svg`
	width: 100px;
	height: 100px;
  animation: ${rotator} 2s linear infinite;
  stroke: ${({ color }) => color};
  & .path {
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export default LoadingSpinner;