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

export const TaskContentContainer = styled.span<{ $isCompleted?: boolean }>`
  padding-left: 1rem;
  color: ${props => props.$isCompleted ? "#3a3a3a" : "#FFFF"};
  flex-wrap: wrap;
  padding-right: 1rem;
  text-decoration: ${props => props.$isCompleted ? "line-through" : "none"};
`

export const InputTaskCompleted = styled.input.attrs({ type: "checkbox" })``

