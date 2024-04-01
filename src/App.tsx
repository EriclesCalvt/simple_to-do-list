import Header from "./components/Header/Header"
import { AppContainer } from "./styles/App.styled"
import InputBar from "./components/InputBar/InputBar"
import { TaskContainer, TaskActiviesContainer, TaskActiviesContainerCounter } from './styles/Tasks.styled'
import Task from "./components/Task/Task";
import { useState } from "react";

export default function App(){
  const [tasks, setTasks] = useState<number[]>([])
  const [finishedTasks, setFinishedTasks] = useState<number>(0)

  const handleAddTasks = (content) => [
    setTasks([...content])
  ]
  return (
    <AppContainer>
      <Header />
      <InputBar handleAddTasks={handleAddTasks}/>

      <TaskContainer>
        <TaskActiviesContainer>
          <p>Tarefas criadas</p>
          <TaskActiviesContainerCounter>
            {tasks.length}
          </TaskActiviesContainerCounter>
        </TaskActiviesContainer>
        <TaskActiviesContainer $isBlue>
          <p>Concluidas</p>
          <TaskActiviesContainerCounter>
            {finishedTasks} de {tasks}
          </TaskActiviesContainerCounter>
        </TaskActiviesContainer>
      </TaskContainer>

      {tasks.map(()=> (
        <Task />
      ))}
    </AppContainer>
  )
}