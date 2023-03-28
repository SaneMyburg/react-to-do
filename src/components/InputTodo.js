import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = ({ addToDoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addToDoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please enter an item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button type="submit" className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addToDoItem: PropTypes.func.isRequired,
};

export default InputTodo;
