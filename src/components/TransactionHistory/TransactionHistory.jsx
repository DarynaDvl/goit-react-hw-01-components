import {
  TransactionHistoryWrapper,
  TransactionHistoryTable,
  TransactionHistoryTh,
  TransactionHistoryTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryTable>
        <thead>
          <tr>
            <TransactionHistoryTh>Type</TransactionHistoryTh>
            <TransactionHistoryTh>Amount</TransactionHistoryTh>
            <TransactionHistoryTh>Currency</TransactionHistoryTh>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <TransactionHistoryTd>{type}</TransactionHistoryTd>
                <TransactionHistoryTd>{amount}</TransactionHistoryTd>
                <TransactionHistoryTd>{currency}</TransactionHistoryTd>
              </tr>
            );
          })}
        </tbody>
      </TransactionHistoryTable>
    </TransactionHistoryWrapper>
  );
};
