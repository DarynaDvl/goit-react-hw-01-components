import { ProfileCard, Wrapper, List, ListItem, ProfileImg } from "./Profile.styled";


export const Profile = ({ user: { username, tag, location, avatar, stats: {followers, views, likes}}}) => {
    return <ProfileCard>
        <Wrapper>
            <ProfileImg src={avatar} alt={username}/>
            <p><b>{username}</b></p>
            <p>@{tag}</p>
            <p>{location}</p>
        </Wrapper>

        <List>
        <ListItem>
            <span>Followers</span>
            <span><b>{followers}</b></span>
        </ListItem>

        <ListItem>
            <span>Views</span>
            <span><b>{views}</b></span>
        </ListItem>

        <ListItem>
            <span>Likes</span>
            <span><b>{likes}</b></span>
        </ListItem>

        </List>
    </ProfileCard>
};