import { commentListAPI } from '../../../apis/comment/commentAPI';
import React, { useState } from 'react';
import Comment from './Comment';
import { CommentLayout } from './Comment.styled';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  //댓글목록 불러오기
  const { data, error } = useQuery({
    queryFn: () =>
      commentListAPI(id).then((res) => {
        const reverseComments = res.comments.reverse();
        setComments(reverseComments);
        return res.comments;
      }),

    queryKey: ['commentlist', comments, id]
  });

  return (
    <CommentLayout>
      {comments?.map((item, idx) => (
        <Comment key={idx} data={item} />
      ))}
    </CommentLayout>
  );
}
