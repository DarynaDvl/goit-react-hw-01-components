import styled from 'styled-components';

export const ProfileCard = styled.div`
width: 350px;
border: 1px solid light-grey;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 3px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid light-grey;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 3px;
padding: 15px;
gap: 10px;
`;

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProfileImg = styled.img`
max-width: 70%;
padding: 10px;
border-radius: 50%
`

