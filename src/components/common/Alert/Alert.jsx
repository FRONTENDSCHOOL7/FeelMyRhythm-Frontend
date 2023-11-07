import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { atomPostUpdateContent, atomThemeChange } from '../../../store/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../../../apis/write/writeAPI';
import { deleteProduct } from '../../../apis/profile/productListAPI';
import { commentDeleteAPI } from '../../../apis/comment/commentAPI';

export default function Alert({ alertMsg, modalFunc, SetAlertMsg, onClose, commentId, postId }) {
  const navigate = useNavigate();

  const postUpdateContent = useRecoilValue(atomPostUpdateContent);

  const { state } = useLocation();

  const { pathname } = useLocation();

  const queryClient = useQueryClient();

  const { id } = useParams();

  const setThemeChange = useSetRecoilState(atomThemeChange);

  const { mutate: mutateDeletePost } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      if (postUpdateContent.content) navigate('/profile');
      queryClient.invalidateQueries('myPostList');
    }
  });

  const { mutate: mutateDeleteProduct } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => navigate(-1)
  });

  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: commentDeleteAPI,
    onSuccess: () => queryClient.invalidateQueries('commentlist')
  });

  useEffect(() => {}, [alertMsg]);

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
    if (alertMsg === '삭제' && pathname.includes('post') && postUpdateContent) mutateDeletePost(postUpdateContent.id);
    if (alertMsg === '삭제' && (pathname.includes('home') || pathname.includes('profile')) && postId)
      mutateDeletePost(postId);
  };

  const onYoutubeOpen = () => {
    if (alertMsg === '삭제된 상품 접근') {
      window.open(`https://www.youtube.com/watch?v=${state.youtubeId}`);
      navigate(-1);
    }
  };

  const onDeleteProduct = () => {
    mutateDeleteProduct(state.productId);
  };

  const onNavigateBack = () => {
    alertMsg === '삭제된 상품 접근' && navigate(-1);
  };

  const onDeleteComment = (id, commentId) => {
    if (commentId && id) mutateDeleteComment({ id, commentId });
  };

  const onThemeChange = () => {
    if (alertMsg !== '테마 전환') {
      return;
    }
    const theme = localStorage.getItem('theme');
    setThemeChange((prev) => !prev);
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') localStorage.setItem('theme', 'light');
  };

  return (
    <AlertLayout $alertMsg={alertMsg}>
      <QuesContent>
        {alertMsg === '채팅방 나가기'
          ? '채팅방을 나가시겠어요?'
          : alertMsg === '테마 전환'
          ? '테마를 전환하시겠어요?'
          : alertMsg === '삭제된 상품 접근'
          ? '삭제된 게시글 입니다.'
          : alertMsg + '하시겠어요?'}
      </QuesContent>
      <FlexBox>
        <AlertButton
          onClick={() => {
            modalFunc();
            SetAlertMsg('');
            onClose();
            onNavigatePostUpdate();
            onYoutubeOpen();
            onDeleteComment(id, commentId);
            onThemeChange();
          }}
          $textColor='#7B86AA'>
          {alertMsg === '삭제된 상품 접근' ? '유투브로 보기' : alertMsg}
        </AlertButton>
        {alertMsg === '삭제된 상품 접근' && (
          <AlertButton
            onClick={() => {
              modalFunc();
              SetAlertMsg('');
              onClose();
              onNavigatePostUpdate();
              onDeleteProduct();
            }}
            $textColor='#7B86AA'>
            좋아하는 글 취소
          </AlertButton>
        )}
        <AlertButton
          onClick={() => {
            SetAlertMsg('');
            onNavigateBack();
          }}>
          취소
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

  width: auto;
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
