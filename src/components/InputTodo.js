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
      setMessage('Please enter a title');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addToDoItem: PropTypes.func.isRequired,
};

export default InputTodo;
