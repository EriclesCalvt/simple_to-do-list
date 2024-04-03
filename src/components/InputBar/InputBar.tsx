import { PlusCircle } from 'lucide-react'
import { ButtonContainer } from '../../styles/ButtonAdd.styled'
import { Input, InputContainer } from './InputBar.styled'

interface InputBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueText : any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ButtonAddTask: any
}

export default function InputBar({valueText, ButtonAddTask}:InputBarProps){

  return (
    <InputContainer>
      <Input onChange={valueText} placeholder='Adicione uma nova tarefa'/>
      <ButtonContainer onClick={ButtonAddTask}>
        <PlusCircle />
      </ButtonContainer>
    </InputContainer>
  )
}
