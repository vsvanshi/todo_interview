import { useState, useEffect } from "react"
import { Filters } from "./components/Filters"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editTask, setEditTask] = useState(null);

  // localstorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
  if (editTask) {
    setTasks(tasks.map(tsk => tsk.id === editTask.id ? { ...task, id: tsk.id, isCompleted: tsk.isCompleted } : tsk));
    setEditTask(null);
  } else {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: task.title,
        isCompleted: false
      }
    ]);
  }
};

  // delete
  const deleteTask = (id) => {
    setTasks(tasks.filter(tsk => tsk.id !== id));
  };

  // toggle
  const toggleComplete = (id) => {
    setTasks(tasks.map(tsk => tsk.id === id ? { ...tsk, isCompleted: !tsk.isCompleted } : tsk));
  };

  // filters
  const filteredTasks = tasks.filter(tsk =>
    filter === 'All' ? true : filter === 'Active' ? !tsk.isCompleted : tsk.isCompleted
  );
  return (
    <>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <TaskForm 
          onSubmit={addTask}
          editTask={editTask}
        />
        <Filters 
          filter={filter} 
          setFilter={setFilter}
        />
        <TaskList 
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
          onEdit={setEditTask}
        />
      </div>
    </>
  )
}

export default App
