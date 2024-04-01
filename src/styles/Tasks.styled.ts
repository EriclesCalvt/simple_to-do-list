import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  width: 53rem;
  justify-content: space-between;
`
export const TaskActiviesContainer = styled.div<{ $isBlue?: boolean;}>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  color: ${props => props.$isBlue ? "#8284FA" : "#1E6F9F"};
`
