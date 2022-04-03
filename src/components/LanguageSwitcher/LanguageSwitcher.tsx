import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	return (
		<DivWrapper>
			<DivButtons>
				<button onClick={() => changeLanguage('sk')}>SK</button>
				<button onClick={() => changeLanguage('en')}>en</button>
			</DivButtons>
		</DivWrapper>
	)
}

const DivWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: ${({ theme: { main } }) => main};
	color: white;
	text-align: center;
`

const DivButtons = styled.div`
	margin: 0 20px;
`;

export default LanguageSwitcher