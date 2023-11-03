import React, { useEffect, useState } from 'react';
import * as S from './CommentWrite.styled';
import { commentWriteAPI } from '../../../apis/comment/commentAPI';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function CommentWrite() {
  const [comment, setComment] = useState('');
  const user = useRecoilValue(atomMyInfo);
  const queryclient = useQueryClient();
  const { id } = useParams();

  const { mutate } = useMutation({
    mutationFn: () => commentWriteAPI({ postid: id, comment }),
    onSuccess: () => {
      queryclient.invalidateQueries(['comments', id]);
    },
    onError: (err) => {
      console.error('Error creating comment:', err);
    }
  });

  const onCreateComment = (id, comment) => {
    if (comment.trim()) {
      mutate({
        id,
        comment
      });
    }
  };

  return (
    <S.CommentWriteLayout>
      <S.UserImg src={user?.image} />
      <S.BottomInput placeholder='댓글을 남겨보세요' onChange={(e) => setComment(e.target.value)} value={comment} />
      <S.PostBtn onClick={() => onCreateComment(id, comment)}>게시</S.PostBtn>
    </S.CommentWriteLayout>
  );
}
