import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ label, className }) => <div className={className}>{label}</div>;

Header.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string
};

Header.defaultProps = {
	label: 'Header',
	className: ''
};

export default Header;
