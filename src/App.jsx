import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    if (editingId) {
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, text: newTask } : task
      ));
      setEditingId(null);
    } else {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        completed: false
      }]);
    }

    setNewTask('');
  };

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEditTask = id => {
    const taskToEdit = tasks.find(task => task.id === id);
    setNewTask(taskToEdit.text);
    setEditingId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <Header />
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add or edit a task..."
            className="flex-1 border px-3 py-2 rounded-l"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            {editingId ? 'Update' : 'Add'}
          </button>
        </div>

        <ToDoList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleComplete}
          onEdit={handleEditTask}
        />
      </div>
    </div>
  );
}

export default App;