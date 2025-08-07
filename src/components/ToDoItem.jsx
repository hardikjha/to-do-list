function ToDoItem({ task, onDelete, onToggle, onEdit }) {
  return (
    <li className="flex justify-between items-center mb-2">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task.id)}
          className="bg-yellow-500 text-white px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
