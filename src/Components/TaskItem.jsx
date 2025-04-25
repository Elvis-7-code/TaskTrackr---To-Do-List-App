import React from 'react'

function TaskItem({task, deleteTask, editTask}) {
    const[isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);

const handleEdit= () => {
    if (isEditing){
        editTask(task.id, text);
    }
    setIsEditing(!isEditing);
};

  return (
    <div>
    {isEditing ? (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    ) : (
      <span>{task.text}</span>
    )}
    <button onClick={handleEdit}>
      {isEditing ? "Save" : "Edit"}
    </button>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </div>
  );
}

export default TaskItem