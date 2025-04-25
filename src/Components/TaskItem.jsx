import React from 'react'

function TaskItem({task, deleteTask, editTask}) {
    const[isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);
    
const TaskItem = () => {
  return (
    <div>TaskItem</div>
  )
}

export default TaskItem