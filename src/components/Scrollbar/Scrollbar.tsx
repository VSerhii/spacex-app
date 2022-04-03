import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactResizeDetector from 'react-resize-detector';

const Scrollbar = ({ children }: { children: ReactNode }): ReactElement => {
	const scrollbarRef = useRef(null);
	const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

	const onScrollStop = () => {
		const scrollValues = scrollbarRef?.current.getValues();
		setIsScrolledToBottom(
			(scrollValues.scrollHeight <= scrollValues.clientHeight)
			|| scrollValues.top === 1
		)
		console.log('isScrolledToBottom', isScrolledToBottom)
	}

	const handleResize = () => {
		scrollbarRef?.current.update();
	}

	return (
		<Scrollbars
			ref={scrollbarRef}
			renderThumbVertical={() => <DivScrollbarThumb />}
			renderView={(props) => (
				<DivView className="view" {...props} />
			)}
			onScrollStop={onScrollStop}
		>
			<div>
				<ReactResizeDetector
					handleHeight
					onResize={handleResize}
				/>
				{children}
			</div>
		</Scrollbars>
	)
}

const DivView = styled.div`
  position: relative !important;
  height: 100%;
  overflow-x: hidden !important;
`;

const DivScrollbarThumb = styled.div`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.scrollbar.light};
`;

export default Scrollbar