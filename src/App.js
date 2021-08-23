import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk Cat',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Food Delivery',
      day: 'Nov 2nd at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Wake up',
      day: 'Jan 5th at 7:30am',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Task to Show'
      )}
    </div>
  )
}

export default App
