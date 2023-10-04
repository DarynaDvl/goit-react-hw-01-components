import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { FriendsWrapper, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendsListItem
              id={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsList>
    </FriendsWrapper>
  );
};
