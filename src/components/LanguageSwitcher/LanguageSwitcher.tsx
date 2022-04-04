import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface SpanSwitchProps {
	readonly isActive: boolean;
};

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	console.log('lolka', i18n.language)
	return (
		<DivWrapper>
			<DivSwitches>
				<SpanSwitch isActive={i18n.language === 'en'} onClick={() => changeLanguage('en')}>EN</SpanSwitch>
				/
				<SpanSwitch isActive={i18n.language === 'sk'} onClick={() => changeLanguage('sk')}>SK</SpanSwitch>
			</DivSwitches>
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

const DivSwitches = styled.div`
	margin: 0 20px;
`;

const SpanSwitch = styled.span<SpanSwitchProps>`
	color: ${({ isActive, theme }) => isActive ? theme.text.primary : theme.text.secondary};
	font-size: 14px;
	padding 0 5px;
	cursor: pointer;
`;

export default LanguageSwitcher