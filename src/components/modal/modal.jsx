import React from 'react';
import styledComponents from 'styled-components';
import { styled } from 'styletron-react';

const ModalWrapper = styled.div`
`

const Modal = (props) => {
	return (
		<ModalWrapper>
			This is a modal
		</ModalWrapper>
	);
}
 
export default Modal;