import styled, { keyframes } from 'styled-components';
const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%); 
    opacity: 0;
  }
  to {
    transform: translateY(0); 
    opacity: 1;
  }
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 767px;
  width: 100%;
  background-color: white;
  padding: 24px 0;
  border-radius: 10px 10px 0 0;
  z-index: 40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  animation: ${slideUpAnimation} 0.5s ease-out forwards;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  animation: ${fadeInAnimation} 0.5s ease-out forwards;
`;
export const Img = styled.img`
  width: auto;
  height: auto;
`;

export const Button = styled.button`
  background-color: white;
  color: inherit;
  border: none;
  padding: 0;
  max-width: 767px;
  width: 100vw;
  height: 46px;
  font: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;
export const P = styled.p`
  color: #000;
  font-family: 'Orbit-Regular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 16px;
`;
