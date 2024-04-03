import Header from "./components/Header/Header"
import { AppContainer } from "./styles/App.styled"
import InputBar from "./components/InputBar/InputBar"
import { TaskContainer, TaskActiviesContainer, TaskActiviesContainerCounter } from './styles/Tasks.styled'
import Task from "./components/Task/Task";
import { ChangeEvent, SetStateAction, useState } from "react";

export default function App(){

  const [searchValue, setSearchValue] = useState<string>('')
  const [tasks, setTasks] = useState([{}])

  function addTask(event: ChangeEvent<HTMLInputElement>){
    const searchText = event.target.value;
    setSearchValue(searchText);  
  }

  function buttonAddTask(){
     
  }

  return (
    <AppContainer>
      <Header />
      <InputBar ButtonAddTask={buttonAddTask} valueText={addTask}/>

      <TaskContainer>
        <TaskActiviesContainer>
          <p>Tarefas criadas</p>
          <TaskActiviesContainerCounter>
            10
          </TaskActiviesContainerCounter>
        </TaskActiviesContainer>
        <TaskActiviesContainer $isBlue>
          <p>Concluidas</p>
          <TaskActiviesContainerCounter>
           1 de 10 
          </TaskActiviesContainerCounter>
        </TaskActiviesContainer>
      </TaskContainer>

        {tasks 
        ? <></>
        : tasks.map(() => {
          return(
            <Task key={searchValue} content={searchValue}/>
          )
        })
        }
  
    </AppContainer>
  )
}