import React, { useState, useEffect } from "react";

// Define the shape of a single Todo
interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  // 1. Initialize state from localStorage or empty array
  const [tasks, setTasks] = useState<TodoItem[]>(() => {
    const saved = localStorage.getItem("my-todos");
    return saved ?JSON.parse(saved)  : [];
  });
  
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // 2. Persist to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(tasks));
  }, [tasks]);

  // 3. Add or Save Edit
  const handleAction = () => {
    if (inputValue.trim() === "") return;

    if (editingId !== null) {
      // Save Edit
      setTasks(tasks.map(t => t.id === editingId ? { ...t, text: inputValue } : t));
      setEditingId(null);
    } else {
      // Add New
      const newTask: TodoItem = {
        id: Date.now(), // Simple unique ID
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setInputValue("");
  };

  // 4. Toggle Completion
  const toggleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // 5. Start Editing
  const startEdit = (todo: TodoItem) => {
    setEditingId(todo.id);
    setInputValue(todo.text);
  };

  // 6. Delete
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>My To-Do List v2</h2>
      
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="What needs to be done?"
          style={{ padding: "8px", width: "250px" }}
        />
        <button 
          onClick={handleAction}
          style={{
              backgroundColor: editingId !== null ? "#2196F3" : "#4CAF50",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "10px"
          }}
        >
          {editingId !== null ? "Update Task" : "Add Task"}
        </button>
        {editingId && (
          <button onClick={() => { setEditingId(null); setInputValue(""); }} style={{ marginLeft: "5px" }}>
            Cancel
          </button>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ 
            marginBottom: "10px", 
            display: "flex", 
            alignItems: "center",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "#000"
          }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleComplete(task.id)} 
              style={{ marginRight: "10px" }}
            />
            <span style={{ flexGrow: 1 }}>{task.text}</span>
            
            <button onClick={() => startEdit(task)} style={{ marginRight: "5px" }}>Edit</button>
            <button 
              onClick={() => handleDelete(task.id)}
              style={{ backgroundColor: "#ff4d4d", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", padding: "5px 10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;

// 2. The useEffect Hook (The Auto-Saver)
// TypeScript
// useEffect(() => {
//   localStorage.setItem("my-todos", JSON.stringify(tasks));
// }, [tasks]);
// Think of this as an Event Listener for your data.

// The Dependency [tasks]: This tells React: "Only run this function when the tasks array changes."

// The Result: Every time you add, delete, or edit a task, the code inside automatically triggers, keeping your localStorage perfectly synced with your UI.

// 3. The Power of .map() (Editing & Toggling)
// In React, we never "mutate" state directly (e.g., tasks[0].text = "new" is a no-go). We must create a brand new array.

// Toggling Completion:
// tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)

// It loops through every task.

// If the id matches the one clicked, it creates a copy of that task (...t) but flips the completed status.

// If it doesn't match, it returns the task exactly as it was (: t).

// Editing Text:
// tasks.map(t => t.id === editingId ? { ...t, text: inputValue } : t)

// Same logic as above, but instead of flipping a boolean, it replaces the text with whatever is currently in the input box.

// 4. startEdit (Preparing the UI)
// TypeScript
// const startEdit = (todo: TodoItem) => {
//   setEditingId(todo.id); // "Remember" which task we are fixing
//   setInputValue(todo.text); // Put the current text back into the input field
// };
// This function moves the app into "Edit Mode." It fills the text box with the existing task so you don't have to re-type the whole thing from scratch.

// 5. handleDelete (The Filter)
// TypeScript
// setTasks(tasks.filter((t) => t.id !== id));
// The .filter() method creates a new array containing only the items that pass a test.

// The Test: "Is your ID not equal to the ID I want to delete?"

// If the ID matches, the test fails, and that item is dropped from the new list.