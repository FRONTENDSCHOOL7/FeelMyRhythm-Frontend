import React from 'react';
import styled from 'styled-components';

export default function Alert({ alertMsg, modalFunc, SetAlertMsg, onClose, toggleTheme }) {
  return (
    <AlertLayout $alertMsg={alertMsg}>
      <QuesContent>
        {alertMsg === '채팅방 나가기'
          ? '채팅방을 나가시겠어요?'
          : alertMsg === '테마 전환'
          ? '테마를 전환하시겠어요?'
          : alertMsg + '하시겠어요?'}
      </QuesContent>
      <FlexBox>
        <AlertButton
          onClick={() => {
            SetAlertMsg('');
          }}>
          취소
        </AlertButton>
        <AlertButton
          onClick={() => {
            modalFunc();
            SetAlertMsg('');
            onClose();
            if (alertMsg === '테마 전환') {
              toggleTheme();
            }
          }}
          $textColor='#F26E22'>
          {alertMsg}
        </AlertButton>
      </FlexBox>
    </AlertLayout>
  );
}

const AlertLayout = styled.div`
  display: ${({ $alertMsg }) => ($alertMsg !== '' ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  top: 45vh;
  left: 50vw;
  transform: translate(-50%, -50%);

  width: 252px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgColor};
  z-index: 999;
`;

const QuesContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 22px 0;
  background-color: ${({ theme }) => theme.bgColor};
`;

const FlexBox = styled.div`
  display: flex;
`;

const AlertButton = styled.button`
  width: 126px;
  height: 46px;
  color: ${({ $textColor }) => $textColor};
  font-size: 14px;
  font-weight: 400;
  border: 0.5px solid #dbdbdb;
  border-right: none;
  background-color: ${({ theme }) => theme.bgColor};
`;
