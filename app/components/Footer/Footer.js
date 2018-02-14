import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ className }) => (
	<a
		href="https://github.com/stephencorwin/nextjs-hello-world"
		target="_blank"
		rel="noopener noreferrer"
		title="stephencorwin/nextjs-hello-world"
		className={className}
	>
		<i className="fa fa-github" />
		stephencorwin/nextjs-hello-world
	</a>
);

Footer.propTypes = {
	className: PropTypes.string
};

Footer.defaultProps = {
	className: ''
};

export default Footer;
