import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { showEntirePosts } from '../../apis/home/entirePosts';
import UserProfile from './UserProfile';
import * as S from './entirePosts.styled';
import Loading from '../common/Loading/Loading';
import { useMorePage } from '../../hooks/useMorePage';

export default function EntirePosts({ emojiState }) {
  let [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState({});
  const [totalPages, setTotalPages] = useState(0);

  const ref = useRef();

  const { data, error } = useQuery({
    queryFn: () =>
      showEntirePosts().then(({ posts }) => {
        // console.log('asd', res.posts.image.split('🈳')[0] === 'ms7-3');
        // setFilteredData(res.posts.image.split('🈳')[0] === 'ms7-3');
        setFilteredData(posts.filter((data) => String(data.image).split('🈳')[0] === 'ms7-3'));
        return posts;
      }),
    queryKey: ['allPost']
  });

  console.log(filteredData);

  const { listPageArr, currentPage, hasNextPage, getMorePage } = useMorePage(filteredData);
  console.log('listpagearr', listPageArr);
  console.log('currentPage', currentPage);
  console.log('hasNextPage', hasNextPage);

  const scrollHandler = (targetId) => {
    const targetRef = ref.current[targetId - 1];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      if (currentPage < totalPages - 1) {
        getMorePage();
        //데이터 받아오는 시간 고려
        setTimeout(() => {
          scrollHandler(targetId);
        }, 10);
      }
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMorePage();
        }
      },
      {
        threshold: 1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [getMorePage]);

  if (data && loading)
    return (
      <S.DefaultLayout>
        {listPageArr &&
          listPageArr.map((pageData, pageIndex) => {
            return pageData.map((post, listIndex) => {
              const index = listIndex + pageIndex * 5;
              return (
                (emojiState === '전체' ||
                  emojiState === '선택' ||
                  String(post.image).split('🈳')[4] === emojiState) && (
                  <UserProfile
                    ref={(el) => (ref.current[index] = el)}
                    key={post._id}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    createdAt={post.createdAt}
                    comments={post.comments}
                    heartCount={post.heartCount}
                    id={post._id}
                  />
                )
              );
            });
          })}
        {hasNextPage && (
          <p ref={ref} onClick={getMorePage}>
            ...
          </p>
        )}
      </S.DefaultLayout>
    );
  return <Loading />;
}
