import React from 'react'
import TaskItem from './taskitem'
import { Task } from './types'

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {

  const handleDone = (task: Task) => {
    console.log("handleDone");
  }
  
  const handleDelete = (task: Task) => {
    console.log("handleDone");
  }

  return (
    <div>
      <ul>
        { tasks.map( task=> (
          <TaskItem 
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        ))}
      </ul>
    </div>
  )
}
export default TaskList