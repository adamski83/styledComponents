// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styled/Container.styled';
import { Header } from './components/Header';
import { Global } from './components/styled/Global.styled';
import { Card } from './components/Card';
import content from './components/content.js';
import { Footer } from './components/Footer';
const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333',
	},
	mobile: '768px',
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Global />
				<Header />
				<Container>
					{content.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</Container>
				<Footer></Footer>
			</>
		</ThemeProvider>
	);
}

export default App;
