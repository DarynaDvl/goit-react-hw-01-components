import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friend from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} title="Upload Stats" />
      <FriendList friends={friend} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
