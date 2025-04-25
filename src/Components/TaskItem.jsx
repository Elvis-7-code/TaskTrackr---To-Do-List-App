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
    <div>TaskItem</div>
  )
}

export default TaskItem