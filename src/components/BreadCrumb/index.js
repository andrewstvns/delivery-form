import React from 'react'
import { 
  BreadCrumbWrapper,
  BreadCrumbNumber,
  BreadCrumbText,
  BreadCrumbTextNumber,
  BreadCrumbItem
} from './breadCrumb.element';

const BreadCrumb = ({ isDelivery, isPayment, isFinish }) => {  
  return (
    <BreadCrumbWrapper>
      <BreadCrumbItem>
        <BreadCrumbNumber isActive={isDelivery}>
          <BreadCrumbTextNumber>1</BreadCrumbTextNumber>
        </BreadCrumbNumber>
        <BreadCrumbText>Delivery</BreadCrumbText>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbNumber isActive={isPayment}>
          <BreadCrumbTextNumber>2</BreadCrumbTextNumber>
        </BreadCrumbNumber>
        <BreadCrumbText>Payment</BreadCrumbText>
      </BreadCrumbItem>
      <BreadCrumbItem>
        <BreadCrumbNumber isActive={isFinish}>
          <BreadCrumbTextNumber>3</BreadCrumbTextNumber>
        </BreadCrumbNumber>
        <BreadCrumbText>Finish</BreadCrumbText>
      </BreadCrumbItem>
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb
