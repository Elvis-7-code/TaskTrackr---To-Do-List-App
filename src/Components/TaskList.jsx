import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks && tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  )
}

export default TaskList