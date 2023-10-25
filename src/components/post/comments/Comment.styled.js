import styled from 'styled-components';
import kebobIcon from '../../../assets/images/post/more-vertical.png';

export const CommentLayout = styled.div`
  padding: 10px;
  flex: 1;
`;

export const CommentList = styled.ul`
  border-top: 1px solid #dbdbdb;
  list-style-type: none;
  padding: 0;
`;

export const CommentBox = styled.li`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const TitleContent = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 500;
`;

export const TimeBox = styled.div`
  font-size: 10px;
  color: #767676;
  padding-left: 5px;
`;

export const MoreBtn = styled.button`
  background-image: url(${kebobIcon});
  margin-left: auto;
  width: 20px;
  height: 20px;
  border: none;
  background-repeat: no-repeat;
  background-color: transparent;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  color: #333;
  padding-left: 50px;
`;
