import { FormInput } from './components/UI/Form-input/FormInput';
import { Expenses } from './components/expenses/Expenses';
import NewExpense from './components/new-expense/NewExpense';

const expensesData = [
  {
    id: 1,
    title: 'Шаурма',
    price: 94,
    date: new Date(),
  },
  {
    id: 2,
    title: 'Ноутбук',
    price: 799,
    date: new Date(),
  },
  {
    id: 1,
    title: 'Iphone 12 pro Max',
    price: 94,
    date: new Date(),
  },
  {
    id: 2,
    title: 'Ужин с женой',
    price: 799,
    date: new Date(),
  },
];

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses data={expensesData} />
    </div>
  );
}

export default App;
