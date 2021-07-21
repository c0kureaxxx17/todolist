import React from 'react'
import { Task } from './types'

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete}) => {

  return (
    <li>
      <label>
        <input
          type="checkbox"
          onClick={ () => handleDone(task)}
        />
        <span>{task.title}</span>
      </label>
      <button onClick={ () => handleDelete(task)}>削除</button>
    </li>
  )
}

export default TaskItem