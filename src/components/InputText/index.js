import styled from "styled-components";

const InputText = styled.input`
  outline: 0;
  max-width: ${props => props.medium ? '300px;' : '400px;'};
  height: 60px;
  width: 100%;
  background-color: transparent;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  padding: 0;
  border: 1px solid ${props => props.theme};
  margin-right: 30px;
  margin-bottom: 10px;
`;
export default InputText;