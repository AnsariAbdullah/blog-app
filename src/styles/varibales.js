import styled from "styled-components";

const colors = {
  light: '#fff',
	dark: '#000'
};

const Container = styled.section`
	width: 1024px;
	margin: 0 auto;
	@media (max-width: 768px) {
		width: 768px;
		padding: 20px;
	}
	@media (max-width: 425px) {
		width: 100%;
	}
`;

export {
	colors,
	Container,
}