import React, { useState } from "react";

const ToDo: React.FC = () => {
  // 1. State for the list of tasks and the current input text
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // 2. Add a task to the array
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue(""); // Clear input after adding
    }
  };

  // 3. Delete a task by its index
  const handleDelete = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My To-Do List</h2>
      
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task..."
      />
      <button 
        onClick={handleAdd}
        style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "5px",
            marginLeft: "10px"
        }}
        >Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button     style={{
            backgroundColor: "red",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "5px",
            marginLeft: "10px"
            }} onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;