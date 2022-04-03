import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation()
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	return (
		<DivWrapper>
			<button onClick={() => changeLanguage('sk')}>SK</button>
			<button onClick={() => changeLanguage('en')}>en</button>
		</DivWrapper>
	)
}

const DivWrapper = styled.div`
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
`

export default LanguageSwitcher