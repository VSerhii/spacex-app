import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'urql';
import { client } from './urqlClient'

ReactDOM.render(
	<React.StrictMode>
		<Provider value={client}>
			<App />
		</Provider>,
	</React.StrictMode>,
	document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
