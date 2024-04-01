import { InputTaskCompleted, TaskContainer, TaskContentContainer } from "./Task.styled";
import TrashImage from '../../assets/trash.png'
export default function Task(){

  // let contentTask = ""
  
  return (
    <TaskContainer>
      <InputTaskCompleted/>
        <TaskContentContainer $isCompleted={false}>
          Interger uma iterdum massa libero auctor neque turpis turpis semper. 
          Duis vel sad fames interger.
        </TaskContentContainer>
        <div onClick={() => console.log("it's working")}>
          <img src={TrashImage} alt="imagem lixeiro" height={15}/>
        </div>
    </TaskContainer>
  )
}