import styled from 'styled-components';
import kebobIcon from '../../../assets/images/common/icon-more-vertical.svg';

export const CommentLayout = styled.div`
  padding: 10px;
  flex: 1;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CommentList = styled.ul`
  border-top: 1px solid #dbdbdb;
  list-style-type: none;
  padding: 0;
`;

export const CommentBox = styled.li`
  display: flex;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 42px;
  margin-right: 10px;
`;

export const TitleContent = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
`;

export const TimeBox = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.subTextColor};
  padding-left: 6px;
  padding-top: 1px;
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
  color: ${({ theme }) => theme.textColor};
  padding-top: 8px;
`;

export const CommentProfile = styled.div`
  display: flex;
  cursor: pointer;
`;
