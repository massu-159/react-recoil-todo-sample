import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import AddTask from './components/AddTask'
import InputTask from './components/InputTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <div className="task">
        <InputTask></InputTask>
        <AddTask></AddTask>
      </div>
    </RecoilRoot>
  )
}

export default App
