import React, { useState } from 'react';

const Kanban = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('To Do');

  const [columns, setColumns] = useState({
    'To Do': ['Market research', 'Cross-Check Customer Care Calls'],
    'In Progress': ['Assess Product Importance','Check Customer Rating'],
    'Done': ['Verify Delivery Status'],
  });

  const handleAddTask = () => {
    if (!task.trim()) return;

    setColumns(prev => ({
      ...prev,
      [status]: [...prev[status], task.trim()],
    }));
    setTask('');
  };

  const handleDeleteTask = (column, index) => {
    setColumns(prev => ({
      ...prev,
      [column]: prev[column].filter((_, i) => i !== index),
    }));
  };

  const getColumnColor = (col) => {
    switch (col) {
      case 'To Do':
        return 'bg-gradient-to-r from-red-400 to-red-700 text1 ';
      case 'In Progress':
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text1 ';
      case 'Done':
        return 'bg-gradient-to-r from-green-400 to-lime-500';
      default:
        return 'bg-gray-500';
    }
  };

  
  return (
    <div className="min-h-screen dark:text-white text-black p-1">
      <h1 className="text-4xl font-bold text-center mb-8">
         <span className="text-black text1 dark:text-white">
          Kanban Board
        </span>
      </h1>

      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-4 py-2 rounded-lg w-64 text-black dark:bg-gray-100 border-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 text-black border-2 dark:bg-gray-100 rounded-lg"
        >
          {Object.keys(columns).map(col => (
            <option key={col}>{col}</option>
          ))}
        </select>
        <button
          onClick={handleAddTask}
          className="bg-indigo-500 text1 hover:bg-sky-500 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(columns).map(([col, tasks]) => (
          <div key={col} className="bg-gray-100 rounded-xl shadow-md p-4">
            <div className={`text-white text-lg font-semibold px-4 py-2 rounded-t ${getColumnColor(col)} flex justify-between`}>
              <span>{col}</span>
              <span className="bg-black text-white text-sm px-2 py-0.5 rounded-full">{tasks.length}</span>
            </div>
            <div className="mt-4 space-y-3">
              {tasks.map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-500 rounded-md px-4 py-2 flex justify-between items-center"
                >
                  <span>{t}</span>
                  <button
                    onClick={() => handleDeleteTask(col, i)}
                    className="text-gray-400 hover:text-red-500 text-xl font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Kanban;
