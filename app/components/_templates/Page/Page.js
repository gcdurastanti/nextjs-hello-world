import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../Footer';
import stickyVerticalLayout from '../../../styles/sticky-vertical-layout';

const { Wrapper, Main } = stickyVerticalLayout();

export const Page = ({ className, children }) => (
	<Wrapper>
		<Header />
		<Main className={className}>{children}</Main>
		<Footer />
	</Wrapper>
);

Page.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
};

Page.defaultProps = {
	className: '',
	children: undefined
};

export default Page;
