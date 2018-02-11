import styled from 'styled-components';

export const Html = styled.html`
	height: 100%;
	overflow: hidden;
`;

export const Body = styled.body`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	height: 100%;
	min-height: 100vh;
`;

export const Main = Component => styled(Component)`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	padding: 0 10px;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
`;

export const StickyVerticalLayout = Component => ({
	Html,
	Body,
	Main: Main(Component)
});

export default StickyVerticalLayout;
