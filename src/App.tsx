import React, { useState } from 'react'
import TaskList from './components/tasklist'
import { Task } from './components/types'

const initialState: Task[] = [
  {
      id: 2,
      title: '次にやるやつ',
      done: false
  },{
      id: 1,
      title: 'はじめにやるやつ',
      done: true
  }
]

const App: React.FC = ()  => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
