import {
  FriendsListItemStyled,
  FriendImg,
  OnlineStatus,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsListItemStyled key={id}>
      <OnlineStatus online={isOnline} />
      <FriendImg src={avatar} alt={name} />
      <span>
        <b>{name}</b>
      </span>
    </FriendsListItemStyled>
  );
};
