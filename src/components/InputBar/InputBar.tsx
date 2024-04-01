import Button from '../ButtonAdd/ButtonAdd'
import { Input, InputContainer } from './InputBar.styled'

export default function InputBar({handleAddTasks}){

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viewContent = (event: any) => {
    const content = event.target.value
    console.log(content);
  }

  return (
    <InputContainer>
      <Input onChange={viewContent} placeholder='Adicione uma nova tarefa'/>
      <Button />
    </InputContainer>
  )
}
