import { Button } from '../UI/Button/Button';
import { FormInput } from '../UI/Form-input/FormInput';
import PropTypes from "prop-types"

export const ExpenseForm = ({onShowForm}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert('Отправлено');
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    onShowForm()
  };
  return (
    <form>
      <FormInput
        label="Заголовок"
        inputType="text"
        placeholder="Напишите расход"
        id="f1"
      />
      <FormInput
        label="Цена"
        inputType="number"
        placeholder="Напишите цену"
        id="f2"
      />
      <FormInput
        label="Дата"
        inputType="date"
        placeholder="ММ/ДД/ГГГГ"
        id="f3"
      />
      <Button text="Добавить" onClick={submitHandler} />
      <Button text="Отмена" onClick={cancelHandler} />
    </form>
  );
};

ExpenseForm.propTypes = {
  onShowForm: PropTypes.func,
}