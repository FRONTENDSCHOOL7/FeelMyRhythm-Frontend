import styled from 'styled-components';
const STYLE_CONSTANTS = {
  textColor: '#767676',
  fontFamily: "'Orbit-Regular', sans-serif"
};
export const DefaultLayout = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 767px;
  width: 100vw;
  gap: 25px;
`;
export const Styled = styled.div``;
export const P = styled.p`
  font-family: ${STYLE_CONSTANTS.fontFamily};
  color: ${STYLE_CONSTANTS.textColor};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;
export const Button = styled.button`
  width: 120px;
  height: 44px;
  border-radius: 44px;
  background-color: #f26e22;
  border: none;
  color: #ffffff;
  font-family: ${STYLE_CONSTANTS.fontFamily};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
