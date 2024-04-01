import Header from "./components/Header/Header"
import { AppContainer } from "./styles/App.styled"
import InputBar from "./components/InputBar/InputBar"
import { TaskContainer, TaskActiviesContainer } from './styles/Tasks.styled'
import Task from "./components/Task/Task";
export default function App(){
  const counterTask = 0;
  const counterFinishedTask = 0
  return (
    <AppContainer>
      <Header />
      <InputBar />

      <TaskContainer>
        <TaskActiviesContainer>
          <p>Tarefas criadas</p>
          <p>
            {counterTask}
          </p>
        </TaskActiviesContainer>
        <TaskActiviesContainer $isBlue>
          <p>Concluidas</p>
          <p>
            {counterFinishedTask}
          </p>
        </TaskActiviesContainer>
      </TaskContainer>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </AppContainer>
  )
}