import styled from 'styled-components';

export const StatisticsCard = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 15px;
  border: 1px solid light-grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  gap: 10px;
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  flex-grow: 1;
  background-color: ${({ randomColor }) => randomColor};
`;
