import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './ProfileInfo.styled';
import basicProfile from '../../../assets/images/profile/basic-profile-img.svg';
import { useRecoilValue } from 'recoil';
import { atomMyInfo } from '../../../store/store';
import { readAccountInfo } from '../../../apis/profile/accountInfoAPI';
import { followUser } from '../../../apis/profile/followAPI';
import { unfollowUser } from '../../../apis/profile/unfollowAPI';
import { useMutation, useQuery } from '@tanstack/react-query';
import Loading from '../../common/Loading/Loading';

export default function ProfileInfo() {
  const user = useRecoilValue(atomMyInfo);
  const navigate = useNavigate();
  const { accountname } = useParams();
  const [profile, setProfile] = useState({});
  const [follow, setFollow] = useState(profile.isfollow);
  const [followerCnt, setFollowerCnt] = useState(0);
  const [followingCnt, setFollowingCnt] = useState(0);

  let [loading, setLoading] = useState(false);

  const { data, error } = useQuery({
    queryFn: () =>
      readAccountInfo(accountname).then((res) => {
        // setUserFlag(user.accountname === accountname);
        setProfile(res.profile);
        setFollowerCnt(res.profile.followerCount);
        setFollowingCnt(res.profile.followingCount);
        return res.profile;
      }),
    queryKey: [accountname, user?.accountname]
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  useEffect(() => {
    setFollow(profile.isfollow);
  }, [profile.isfollow]);

  const followMutation = useMutation({
    mutationFn: followUser,
    onSuccess: (res) => {
      setFollow(!follow);
      setFollowerCnt(followerCnt + 1);
    },
    onError: (err) => {}
  });
  const unfollowMutation = useMutation({
    mutationFn: unfollowUser,
    onSuccess: (res) => {
      setFollow(!follow);
      setFollowerCnt(followerCnt - 1);
    },
    onError: (err) => {}
  });

  const handleFollowClick = (url) => {
    navigate('/profile/' + profile.accountname + url);
  };
  const onNavigateProfileUpdate = () => {
    navigate('/profile/update');
  };

  if (data && loading)
    return (
      <S.ProfileInfoLayout>
        <S.RowBox>
          <S.ColBox>
            <S.FollowNum onClick={() => handleFollowClick('/follower')} $fontColor='#000'>
              {followerCnt}
            </S.FollowNum>
            <S.FollowText>followers</S.FollowText>
          </S.ColBox>
          <S.ImgBox>
            <img
              src={!profile.image || String(profile.image).includes('Ellipse.png') ? basicProfile : profile.image}
              alt=''></img>
          </S.ImgBox>
          <S.ColBox>
            <S.FollowNum onClick={() => handleFollowClick('/following')} $fontColor='#767676'>
              {followingCnt}
            </S.FollowNum>
            <S.FollowText>followings</S.FollowText>
          </S.ColBox>
        </S.RowBox>
        <S.TitleContent>{profile.username}</S.TitleContent>
        <S.IDContent>{'@' + profile.accountname}</S.IDContent>
        {String(profile.intro).split('ms7-3🈳')[1] && (
          <S.IntroContent>{String(profile.intro).split('ms7-3🈳')[1]}</S.IntroContent>
        )}
        <S.RowButtonBox>
          {user.accountname === accountname && (
            <S.LinkButton $width='120px' onClick={onNavigateProfileUpdate}>
              프로필 수정
            </S.LinkButton>
          )}
          {!(user.accountname === accountname) && follow && (
            <S.FollowButton
              $follow=''
              onClick={() => {
                unfollowMutation.mutate(profile.accountname);
              }}>
              언팔로우
            </S.FollowButton>
          )}
          {!(user.accountname === accountname) && !follow && (
            <S.FollowButton
              $follow='true'
              onClick={() => {
                followMutation.mutate(profile.accountname);
              }}>
              팔로우
            </S.FollowButton>
          )}
        </S.RowButtonBox>
      </S.ProfileInfoLayout>
    );

  return (
    <>
      <Loading />
    </>
  );
}
