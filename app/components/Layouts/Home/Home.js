import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-styled-flexboxgrid';

import Page from '../Page';
import Greeting from '../../Greeting';
import { Col } from './styles';
import Wrapper from '../../Wrapper';

export const Home = ({ className }) => (
	<Page className={className}>
		<Wrapper>
			<Row>
				<Col xs={12} sm={6} md={4}>
					<Greeting message="Hello, friend!" />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting message="isn't Next.js Cool?" />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting message="we think so!" />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting />
				</Col>
			</Row>
		</Wrapper>
	</Page>
);

Home.propTypes = {
	className: PropTypes.string
};

Home.defaultProps = {
	className: ''
};

export default Home;
