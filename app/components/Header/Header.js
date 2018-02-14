import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ className }) => <div className={className}>Header</div>;

Header.propTypes = {
	className: PropTypes.string
};

Header.defaultProps = {
	className: ''
};

export default Header;
