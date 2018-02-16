import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ href, label, className }) => (
	<div className={className}>
		<a href={href} target="_blank" rel="noopener noreferrer" title={label}>
			{label}
		</a>
	</div>
);

Footer.propTypes = {
	href: PropTypes.string,
	label: PropTypes.string,
	className: PropTypes.string
};

Footer.defaultProps = {
	href: '/',
	label: 'Footer',
	className: ''
};

export default Footer;
