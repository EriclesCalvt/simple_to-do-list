import { InputTaskCompleted, TaskContainer, TaskContentContainer } from "./Task.styled";
import TrashImage from '../../assets/trash.png'

interface TasksProps {
  content: string
}

export default function Task({ content }: TasksProps){
  return (
    <TaskContainer>
      <InputTaskCompleted/>
        <TaskContentContainer $isCompleted={false}>
          {content}
        </TaskContentContainer>
        <div onClick={() => console.log("it's working")}>
          <img src={TrashImage} alt="imagem lixeiro" height={15}/>
        </div>
    </TaskContainer>
  )
}