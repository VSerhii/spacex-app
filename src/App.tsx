import React from 'react';
import Launches from './components/Launches'
import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import LanguageSwitcher from './components/LanguageSwitcher'

const App = () => (
	<ThemeProvider theme={theme.black}>
		<DivWrapper>
			<Launches />
			<LanguageSwitcher />
		</DivWrapper>
	</ThemeProvider>
);

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: visible;
  background-color: ${({ theme: { main } }) => main};
  color: ${({ theme: { text: { primary } } }) => primary};
`;

export default App;
