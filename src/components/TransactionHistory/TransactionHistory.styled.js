import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.div`
  width: 350px;
  border: 1px solid light-grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export const TransactionHistoryTable = styled.table`
  width: 100%;
  padding: 15px;

  border: 1px solid light-grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export const TransactionHistoryTh = styled.th`
  background-color: lightcyan;
  text-align: center;
  padding: 10px;

  border: 1px solid #ccc;
`;

export const TransactionHistoryTd = styled.td`
  background-color: azure;
  text-align: left;
  padding: 10px;

  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
