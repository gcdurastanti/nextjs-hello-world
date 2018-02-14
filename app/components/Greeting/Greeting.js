import React from 'react';
import PropTypes from 'prop-types';

export const Greeting = ({ className }) => (
	<div className={className}>Greeting, "Hello World!"</div>
);

Greeting.propTypes = {
	className: PropTypes.string
};

Greeting.defaultProps = {
	className: ''
};

export default Greeting;
