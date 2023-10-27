import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ProfileInfo.styled';
import basicProfile from '../../../assets/images/profile/basic-profile-img.svg';
import ProfileInfoBtn from './ProfileInfoBtn';
import ProfileMyInfoBtn from './ProfileInfoMyBtn';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';

export default function ProfileInfo({ profile }) {
  const user = useRecoilValue(atomMyInfo);
  const user_flag = user.accountname === profile.accountname;
  const navigate = useNavigate();

  const handleFollowClick = (url) => {
    navigate('/profile/' + profile.accountname + url);
  };

  return (
    <S.ProfileInfoLayout>
      <S.RowBox>
        <S.ColBox>
          <S.FollowNum onClick={() => handleFollowClick('/follower')} $fontColor='#000'>
            {profile.followerCount}
          </S.FollowNum>
          <S.FollowText>followers</S.FollowText>
        </S.ColBox>
        <S.ImgBox>
          <img src={String(profile.image).includes('Ellipse.png') ? basicProfile : profile.image} alt=''></img>
        </S.ImgBox>
        <S.ColBox>
          <S.FollowNum onClick={() => handleFollowClick('/following')} $fontColor='#767676'>
            {profile.followingCount}
          </S.FollowNum>
          <S.FollowText>followings</S.FollowText>
        </S.ColBox>
      </S.RowBox>
      <S.TitleContent>{profile.username}</S.TitleContent>
      <S.IDContent>{'@' + profile.accountname}</S.IDContent>
      <S.IntroContent>{profile.intro}</S.IntroContent>
      <S.RowButtonBox>{user_flag ? <ProfileMyInfoBtn /> : <ProfileInfoBtn profile={profile} />}</S.RowButtonBox>
    </S.ProfileInfoLayout>
  );
}
