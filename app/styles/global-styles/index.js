import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import stickyVerticalLayout from '../sticky-vertical-layout';

export const globalStyles = () => injectGlobal`
	${styledNormalize}
	${stickyVerticalLayout}

	html {
		background-color: #eeeeee;
	}
`;

export default globalStyles;
