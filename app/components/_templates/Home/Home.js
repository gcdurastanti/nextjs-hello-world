import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import Greeting from '../../Greeting';
import { Title, Col } from './styles';

export default ({ className }) => (
	<div className={className}>
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
	</div>
);
