import React from 'react'
import { Task } from './types'

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete}) => {
  return <span>test!</span>
}

export default TaskItem