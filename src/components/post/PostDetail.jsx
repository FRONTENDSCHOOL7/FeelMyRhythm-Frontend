import React, { useEffect, useState } from 'react';
import * as S from './PostDetail.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import basicProfile from '../../assets/images/home/basic-profile.png';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { readDetailPost } from '../../apis/post/detailPostAPI';
import { useNavigate, useParams } from 'react-router';
import { createBookMark, createHeart, createUnHeart, deleteBookMark } from '../../apis/home/heartAPI';
import { readProductList } from '../../apis/profile/productListAPI';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../store/store';
import Modal from '../../components/common/Modal/Modal';

export default function PostDetail() {
  const user = useRecoilValue(atomMyInfo);

  const navigate = useNavigate();

  const [createdAt, setCreateAt] = useState();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { id } = useParams();

  // 상세 게시글 데이터 읽기 API
  const { data } = useQuery({
    queryFn: () =>
      readDetailPost(id).then((res) => {
        setCreateAt(new Date(res.post.createdAt));
        return res;
      }),
    queryKey: ['detailpost']
  });

  // 날짜 변환
  useEffect(() => {
    if (data && createdAt) {
      setYear(createdAt.getFullYear());
      setMonth(createdAt.getMonth() + 1);
      setDate(createdAt.getDate());
    }
  }, [createdAt]);

  // 좋아요 API
  const { mutate: mutateHeart } = useMutation({
    mutationFn: createHeart,
    onSuccess: () => {
      mutateBookMark({
        product: {
          itemName: `ms7-3/${data.post.image}`,
          link: data.post.id,
          itemImage: data.post.author.accountname,
          price: 1
        }
      });
      queryClient.invalidateQueries('detailpost');
    }
  });

  console.log(data);

  // 좋아요 취소 API
  const { mutate: mutateUnHeart } = useMutation({
    mutationFn: createUnHeart,
    onSuccess: () => {
      queryClient.invalidateQueries('detailpost');
      productList.product.filter((product) => {
        return data.post.id === product.link && deleteProduct(product.id);
      });
    }
  });

  // 북마크 추가 API
  const { mutate: mutateBookMark } = useMutation({
    mutationFn: createBookMark
  });

  // 상품 리스트
  const { data: productList } = useQuery({
    queryFn: () => readProductList(user.accountname),
    queryKey: [data]
  });

  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteBookMark
  });

  // 좋아요 버튼
  const handleLike = () => {
    const id = data.post.id;
    data.post.hearted ? mutateUnHeart(id) : mutateHeart(id);
  };

  // 모달
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKebabClick = () => {
    setIsModalOpen(true);
  };

  return (
    <S.DefaultLayout>
      <S.ContainerBox>
        {data && (
          <>
            <S.AboutUserBox>
              <S.StyledProfileImg
                onClick={() => navigate('/profile/' + data?.post?.author?.accountname)}
                src={
                  String(data?.post?.author?.image).includes('Ellipse.png') || !data?.post?.author?.image
                    ? basicProfile
                    : data?.post?.author?.image
                }
                alt='프로필'
              />
              <S.UserInfoBox onClick={() => navigate('/profile/' + data?.post?.author?.accountname)}>
                <S.H2>{data?.post?.author?.username}</S.H2>
                <S.H3>{data?.post?.author?.accountname}</S.H3>
              </S.UserInfoBox>
              <S.Button
                onClick={(e) => {
                  handleKebabClick();
                }}>
                <KebabIcon />
              </S.Button>
            </S.AboutUserBox>
            <S.ContentsBox>
              <S.DescriptionContent>{data?.post?.content}</S.DescriptionContent>
              <S.Iframe src={`http://www.youtube.com/embed/${data?.post?.image.split('🈳')[1]}`} />
            </S.ContentsBox>
            <S.IconsBox>
              <S.StyledHeartBox onClick={() => handleLike()}>
                {data?.post?.hearted ? <ColoredHearIcon /> : <HeartIcon />}
              </S.StyledHeartBox>
              <S.NumBox className='heartnum'>{data?.post?.heartCount}</S.NumBox>
              <S.StyledMessageBox>
                <MessageIcon />
              </S.StyledMessageBox>
              <S.NumBox className='messnum'>{data?.post?.commentCount}</S.NumBox>
            </S.IconsBox>
            <S.Date>
              {year}년 {month}월 {date}일
            </S.Date>
          </>
        )}
      </S.ContainerBox>
      <Modal
        postModal={true}
        postUser={data?.post?.author?.accountname}
        isOpen={isModalOpen}
        onClose={toggleModal}></Modal>
    </S.DefaultLayout>
  );
}
