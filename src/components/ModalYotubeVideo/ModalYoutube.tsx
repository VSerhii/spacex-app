import React, { useEffect } from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components';

type ModalYoutubeProps = {
	videoId: string;
	onClose: () => void
}

const ModalYoutube = ({ videoId, onClose }: ModalYoutubeProps) => {
	const onKeyDown = (event) => {
		if (event.keyCode === 27) {
			onClose();
		};
	}

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown)
		return () => {
			document.removeEventListener("keydown", onKeyDown)
		};
	}, []);

	return (
		<DivModalBackground
			key={videoId}
			onMouseDown={(event) => {
				event.stopPropagation();
				onClose();
			}}
			role="button"
		>
			<YouTube videoId={videoId} />
		</DivModalBackground>
	);
};

const DivModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme: { modal: { background } } }) => background};
  height: 100vh;
  width: 100vw;
  z-index: 10;
  outline: none;
`;

export default ModalYoutube;