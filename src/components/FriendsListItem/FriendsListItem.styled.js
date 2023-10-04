import styled from 'styled-components';

export const FriendsListItemStyled = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;

  border: 1px solid light-grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  gap: 10px;
`;

export const FriendImg = styled.img`
  max-width: 20%;
  padding: 10px;
  border-radius: 10%;
`;

export const OnlineStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
`;
