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

// check how to update state of parent from child and impliment it in close button

const Modal = ({closeModal}) => {
	return (
		<ModalWrapper>
			<button onClick={closeModal} className='close'>x</button>
		</ModalWrapper>
	);
}
 
export default Modal;