import styled, { css } from 'styled-components';

const mainColor = `#f26e22`;

const common = css`
  line-height: normal;
  box-sizing: border-box;
`;

export const ProfileModalLayout = styled.div`
  ${common}
  width: 100vw;
  height: 138px;
  border-radius: 10px 10px 0 0;
  background: #fff;

  display: flex;
  flex-direction: column;

  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -2px 10px rgba(00, 00, 00, 0.1);

  @keyframes fadeInUp {
    0% {
      /* opacity: 0; */
      transform: translate3d(0, 100%, 0);
    }
    to {
      /* opacity: 1; */
      transform: translateZ(0);
    }
  }

  animation: fadeInUp 1s;
`;

export const ModalHandle = styled.div`
  width: 50px;
  height: 4px;
  border-radius: 5px;
  background: #dbdbdb;
  margin: 16px auto;
`;

export const ModalContent = styled.p`
  width: 100vw;
  border-radius: 5px;
  background: #fff;
  padding: 14px 26px;

  font-size: 14px;
  cursor: pointer;
`;
