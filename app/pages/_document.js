import React from 'react';
import Document, { Head, Main as _Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import stickyVerticalLayout from '../styles/sticky-vertical-layout';
import globalStyles from '../styles/global-styles';

const { Html, Body, Main } = stickyVerticalLayout(_Main);

export default class MyDocument extends Document {
	static async getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
		const styleTags = sheet.getStyleElement();

		// injectGlobalStyles
		globalStyles();

		return { ...page, styleTags };
	}

	render() {
		const { styleTags } = this.props;
		return (
			<Html>
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="author" content="Stephen Corwin" />
					<title>Next.js Hello World</title>
					{styleTags}
				</Head>
				<Body>
					<Header />
					<Main />
					<Footer />
					<NextScript />
				</Body>
			</Html>
		);
	}
}
