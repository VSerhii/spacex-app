import React, { useEffect, ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactResizeDetector from 'react-resize-detector';

const Scrollbar = ({ children, onScrollBottom }: any): ReactElement => {
	const scrollbarRef = useRef(null);
	const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

	const onScroll = () => {
		const scrollValues = scrollbarRef?.current.getValues();
		setIsScrolledToBottom(
			scrollValues.top === 1
		)
		console.log('isScrolledToBottom', isScrolledToBottom)
	}

	const handleResize = () => {
		scrollbarRef?.current.update();
	}

	useEffect(() => {
		if (isScrolledToBottom) onScrollBottom()
	}, [isScrolledToBottom])

	return (
		<Scrollbars
			ref={scrollbarRef}
			renderThumbVertical={() => <DivScrollbarThumb />}
			renderView={(props) => <DivView className="view" {...props} />}
			onScroll={onScroll}
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