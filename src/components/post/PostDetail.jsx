import React, { useState } from 'react';
import * as S from './PostDetail.styled';
import { ReactComponent as KebabIcon } from '../../assets/images/home/icon-more-vertical.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/home/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../assets/images/home/icon-message-circle.svg';
import { ReactComponent as ColoredHearIcon } from '../../assets/images/home/heart.svg';
import ProfileImage1 from '../../assets/images/home/basic-profile.png';
import PostImage from '../../assets/images/home/mandarin.png';

const UserProfile = ({
  profileImage,
  username,
  handle,
  description,
  photo,
  altText,
  likes: initialLikes,
  comments,
  date
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <S.ContainerBox>
      <S.AboutUserBox>
        <S.StyledProfileImg src={profileImage} alt='profile' />
        <S.UserInfoBox>
          <S.H2>{username}</S.H2>
          <S.H3>{handle}</S.H3>
        </S.UserInfoBox>
        <S.Button
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <KebabIcon />
        </S.Button>
      </S.AboutUserBox>
      <S.ContentsBox>
        <S.DescriptionContent>{description}</S.DescriptionContent>
        <S.Img src={photo} alt={altText} />
      </S.ContentsBox>

      <S.IconsBox>
        <S.StyledHeartBox onClick={handleLike}>{isLiked ? <ColoredHearIcon /> : <HeartIcon />}</S.StyledHeartBox>
        <S.NumBox className='heartnum'>{likes}</S.NumBox>
        <S.StyledMessageBox>
          <MessageIcon />
        </S.StyledMessageBox>
        <S.NumBox className='messnum'>{comments}</S.NumBox>
      </S.IconsBox>

      <S.Date>{date}</S.Date>
    </S.ContainerBox>
  );
};

export default function Default() {
  const userData = [
    {
      profileImage: ProfileImage1,
      username: '애월읍 위니브 감귤농장',
      handle: '@weniv_Mandarin',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugiat accusamus, quidem repellendus iusto incidunt, accusantium enim tenetur architecto neque corrupti modi recusandae aperiam exercitationem iure? Impedit totam qui corporis aliquid ad, optio quam quos nam aspernatur, dicta voluptas nihil magni id ipsa dignissimos hic iure? Tempore voluptates quo eligendi.',
      photo: PostImage,
      altText: '감귤사진',
      likes: 9,
      comments: 12,
      date: '2020년 10월 21일'
    }
  ];
  return (
    <S.DefaultLayout>
      {userData.map((user, index) => (
        <UserProfile key={index} {...user} />
      ))}
    </S.DefaultLayout>
  );
}

// const UserProfile = ({
//   profileImage,
//   username,
//   handle,
//   description,
//   photo,
//   altText,
//   likes: initialLikes,
//   comments,
//   date
// }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likes, setLikes] = useState(initialLikes);

//   const handleLike = () => {
//     if (!isLiked) {
//       setLikes(likes + 1);
//     } else {
//       setLikes(likes - 1);
//     }
//     setIsLiked(!isLiked);
//   };
//   return (
//     <S.ContainerBox>
//       <S.AboutUserBox>
//         <S.StyledProfileImg src={profileImage} alt='profile' />
//         <S.UserInfoBox>
//           <S.H2>{username}</S.H2>
//           <S.H3>{handle}</S.H3>
//         </S.UserInfoBox>
//         <S.Button>
//           <KebabIcon />
//         </S.Button>
//       </S.AboutUserBox>

//       <S.P>{description}</S.P>
//       <S.Img src={photo} alt={altText} />

//       <S.IconsBox>
//         <S.StyledHeartBox onClick={handleLike}>{isLiked ? <ColoredHearIcon /> : <HeartIcon />}</S.StyledHeartBox>
//         <S.Span className='heartnum'>{likes}</S.Span>
//         <S.StyledMessageBox>
//           <MessageIcon />
//         </S.StyledMessageBox>
//         <S.Span className='messnum'>{comments}</S.Span>
//       </S.IconsBox>
//       <S.Date>{date}</S.Date>
//     </S.ContainerBox>
//   );
// };

// export default function Default() {
//   const userData = [
//     {
//       profileImage: ProfileImage1,
//       username: '애월읍 위니브 감귤농장',
//       handle: '@weniv_Mandarin',
//       description:
//         '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
//       photo: PostImage,
//       altText: '감귤사진',
//       likes: 100,
//       comments: 12,
//       date: '2020년 10월 21일'
//     }
//   ];
//   return (
//     <S.DefaultLayout>
//       {userData.map((user, index) => (
//         <UserProfile key={index} {...user} />
//       ))}
//     </S.DefaultLayout>
//   );
// }
