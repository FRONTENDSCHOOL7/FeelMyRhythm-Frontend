import React, { useEffect, useState } from 'react';
import * as S from './CommentWrite.styled';
import { commentWriteAPI } from '../../../apis/comment/commentAPI';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import basicProfile from '../../../assets/images/common/basic-profile.svg';

export default function CommentWrite() {
  const [comment, setComment] = useState('');
  const user = useRecoilValue(atomMyInfo);
  const queryclient = useQueryClient();
  const { id } = useParams();

  const { mutate } = useMutation({
    mutationFn: () => commentWriteAPI({ postid: id, comment }),
    onSuccess: () => {
      queryclient.invalidateQueries(['comments', id]);
      setComment('');
    }
  });

  const onCreateComment = (id, comment) => {
    if (!comment.trim()) {
      alert('댓글을 입력해주세요');
      return;
    }
    mutate({
      id,
      comment
    });
  };

  const handleKeyDown = (e, id, comment) => {
    if (e.key === 'Enter') {
      onCreateComment(id, comment);
    }
  };

  return (
    <S.CommentWriteLayout>
      <S.UserImg src={!user?.image || String(user?.image).includes('Ellipse.png') ? basicProfile : user?.image} />
      <S.BottomInput
        placeholder='댓글을 남겨보세요'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, id, comment)}
      />
      <S.PostBtn onClick={() => onCreateComment(id, comment)}>게시</S.PostBtn>
    </S.CommentWriteLayout>
  );
}
