import PropTypes from 'prop-types';
import { ExpenseItem } from '../expense-item/ExpenseItem';

export const Expenses = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

Expenses.PropTypes = {
  data: PropTypes.array.isRequired,
};
