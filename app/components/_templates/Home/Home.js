import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-styled-flexboxgrid';

import Page from '../Page';
import Greeting from '../../Greeting';
import { Title, Col } from './styles';

export const Home = ({ className }) => (
	<Page className={className}>
		<Title>Home</Title>
		<Grid>
			<Row>
				<Col xs={12} sm={6} md={4}>
					<Greeting />
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
				<Col xs={12} sm={6} md={4}>
					<Greeting />
				</Col>
				<Col xs={12} sm={6} md={4}>
					<Greeting />
				</Col>
			</Row>
		</Grid>
	</Page>
);

Home.propTypes = {
	className: PropTypes.string
};

Home.defaultProps = {
	className: ''
};

export default Home;
