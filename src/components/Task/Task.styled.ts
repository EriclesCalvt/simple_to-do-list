import styled from "styled-components";

export const TaskContainer = styled.div<{ $isCompleted?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  border-radius: 1rem;
  height: 4.5rem;
  width: 53rem;
  margin-bottom: 1rem;
`

export const TaskContentContainer = styled.span`
  padding-left: 1rem;
  color: #FFFF;
  flex-wrap: wrap;
`

export const InputTaskCompleted = styled.input.attrs({ type: "checkbox" })``

