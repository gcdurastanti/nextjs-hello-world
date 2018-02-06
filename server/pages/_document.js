import Document, { Head, Main, NextScript } from 'next/document';
import styled, { injectGlobal, ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';

const normalize = () => injectGlobal`
	${styledNormalize}

	html {
		height: 100%;
		overflow: hidden;
	}

	body {
		background-color: #EEEEEE;
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		height: 100%;
		min-height: 100vh;
	}
`;

const StyledMain = styled(Main)`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	padding: 0 10px;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
`;

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		normalize();
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					<title>My page</title>
					{this.props.styleTags}
				</Head>
				<body>
					<Header />
					<StyledMain />
					<Footer />
					<NextScript />
				</body>
			</html>
		);
	}
}
