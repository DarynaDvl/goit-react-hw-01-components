import {
  StatisticsCard,
  StatList,
  StatListItem,
  StatTitle,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsCard>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {data.map(({ id, label, percentage }) => {
          const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;

          return (
            <StatListItem key={id} randomColor={randomColor}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatListItem>
          );
        })}
      </StatList>
    </StatisticsCard>
  );
};
