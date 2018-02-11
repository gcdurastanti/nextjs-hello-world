import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const globalStyles = () => injectGlobal`
	${styledNormalize}
	
	html {
		background-color: #eeeeee;
	}
`;

export default globalStyles;
