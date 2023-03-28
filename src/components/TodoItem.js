import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    textDecoration: 'line-through',
    opacity: 0.4,
  };

  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const [updateInput, setUpdateInput] = useState(itemProp.title);

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };

  const handleEditing = () => {
    setEditing(true);
  };

  return (
    <li className="item">
      <div className="content" style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
