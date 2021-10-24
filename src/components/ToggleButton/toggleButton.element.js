import styled from 'styled-components';

export const ToggleButtonWrapper = styled.div`
  max-width: 180px;
  width: 100%;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: unset;
    margin-bottom: 14px;
  }
`;

export const ToggleButtonInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const ToggleButtonContent = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.isSelected ? '#1BD97B;' : '#CCCCCC;'};
  background-color: ${props => props.isSelected ? '#1BD97B;' : '#FFFFFF;'};
  width: 100%;
  height: 60px;
  user-select: none;
  padding: 12px 15px;
`;

export const ToggleButtonText = styled.p`
  margin: 0;
  font-size: '12px;';
  line-height: '15px;';
`;

export const ToggleButtonTextFee = styled.p`
  margin: 0;
  font-size: '16px;';
  line-height: '19px;';
`;