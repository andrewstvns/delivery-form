import styled from "styled-components";

const InputTextArea = styled.textarea`
  outline: 0;
  max-width: 400px;
  height: 120px;
  width: 100%;
  background-color: transparent;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  padding: 0;
  border: 1px solid ${props => props.theme};
`;

export default InputTextArea;