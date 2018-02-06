import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import Greeting from '../../components/Greeting';
import { Title, Col } from './styles';

export default class extends React.Component {
	render() {
		return (
			<Grid>
				<Title>Home</Title>

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
		);
	}
}
