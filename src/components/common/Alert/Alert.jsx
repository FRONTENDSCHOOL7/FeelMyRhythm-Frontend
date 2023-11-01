import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { atomPostUpdateContent } from '../../../store/store';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from '../../../apis/write/writeAPI';

export default function Alert({ alertMsg, modalFunc, SetAlertMsg, onClose }) {
  const navigate = useNavigate();

  const postUpdateContent = useRecoilValue(atomPostUpdateContent);

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => navigate('/home')
  });

  const onNavigatePostUpdate = () => {
    if (alertMsg === '수정')
      navigate('/write', {
        state: {
          update: true,
          postId: postUpdateContent.id,
          content: postUpdateContent.content,
          id: postUpdateContent.image.split('🈳')[1],
          title: postUpdateContent.image.split('🈳')[2],
          thumbnail: postUpdateContent.image.split('🈳')[3],
          emojiState: postUpdateContent.image.split('🈳')[4]
        }
      });
    if (alertMsg === '삭제') mutate(postUpdateContent.id);
  };

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
            onNavigatePostUpdate();
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
  background: #fff;
  z-index: 999;
`;

const QuesContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 22px 0;
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
  background: #fff;
`;
