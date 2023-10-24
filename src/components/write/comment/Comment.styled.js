import styled from 'styled-components';
import kebobIcon from '../../../images/write/more-vertical.png';

export const CommentLayout = styled.div`
  /* flex: 1 auto; */
`;

export const CommentList = styled.ul`
  border-top: 1px solid #dbdbdb;
`;

export const CommentBox = styled.li`
  padding: 20px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CommentP = styled.p`
  font-size: 14px;
  color: #333;
  margin: 10px 0 0 70px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 0 10px;
`;

export const TitleP = styled.p`
  font-size: 14px;
  color: #000;
  padding: 9px 16px 0 10px;
  font-weight: 500;
  margin: 0;
`;

export const Time = styled.div`
  font-size: 10px;
  color: #767676;
  padding-top: 6px;
  padding-left: 10px;
`;
export const MoreBtn = styled.button`
  margin: 20px 10px 10px 90px;
  width: 20px;
  height: 20px;
  background: url(${kebobIcon}) center;
  border: 0;
`;
