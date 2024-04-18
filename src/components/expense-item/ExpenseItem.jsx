import css from './ExpenseItem.module.css';
import PropTypes from 'prop-types';

export const ExpenseItem = ({ date, title, price }) => {
  return (
    <div className={css.expenseItemContainer}>
      <div className={css.expenseItemDate}>{date.toISOString()}</div>
      <div className={css.expenseItemTitle}>{title}</div>
      <div className={css.expenseItemPrice}>{price}</div>
    </div>
  );
};

ExpenseItem.PropTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
};
