import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background: white;;
	.close{
		position: absolute;
		top: 5px;
		right: 5px;
	}
`

const Modal = ({closeModal}) => {
	return (
		<ModalWrapper>
			<button onClick={closeModal} className='close'>x</button>
		</ModalWrapper>
	);
}
 
export default Modal;