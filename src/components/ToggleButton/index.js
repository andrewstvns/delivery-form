import React from 'react'
import { 
  ToggleButtonWrapper,
  ToggleButtonInput,
  ToggleButtonContent,
  ToggleButtonText,
  ToggleButtonTextFee
} from './toggleButton.element';

const ToggleButton = ({ toggleName, toggleFee, toggleText, handleChecked, isSelected }) => {  
  return (
    <ToggleButtonWrapper>
      <ToggleButtonInput 
        type='checkbox' 
        name={toggleName} 
        onChange={handleChecked}
      />
      <ToggleButtonContent isSelected={isSelected}>
        <ToggleButtonText>{toggleText}</ToggleButtonText>
        <ToggleButtonTextFee>{toggleFee}</ToggleButtonTextFee>
      </ToggleButtonContent>
    </ToggleButtonWrapper>
  )
}

export default ToggleButton
