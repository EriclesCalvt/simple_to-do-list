import Button from '../ButtonAdd/ButtonAdd'
import { Input, InputContainer } from './InputBar.styled'

export default function InputBar(){
  return (
    <InputContainer>
      <Input placeholder='Adicione uma nova tarefa'/>
      <Button />
    </InputContainer>
  )
}
