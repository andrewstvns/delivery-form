import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper, RightSection } from 'globalStyles';
import {
  BreadCrumb,
  Checkbox,
  Text,
  InputText, 
  InputTextArea,
  SummarySection, 
  Heading 
} from 'components';
import {
  DeliveryInputSection,
  DeliveryDropship,
  DeliveryHeading
} from './deliveryDetails.element'

const schema = yup.object().shape({
  email: yup.string().email(),
  phoneNumber: yup.number().positive().integer().max(20),
});

const status = {
  normal: "#CCCCCC",
  success: "#1BD97B",
  failed: "#FF8A00"
};

const DeliveryDetails = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isActive] = useState({
    deliveryActive: true,
    paymentActive: false,
    finishActive: false
  });
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    setIsDisabled(!isDisabled);
  };

  const handleSubmitForm = (data) => {
    console.log(data);
    return data;
  };

  const dropFee = 5900;
  const nonDropship = 0;
  const cost = 500000;
  let grandTotal = 500000;

  useEffect(() => {
    localStorage.setItem("dropshippingFee", JSON.stringify(dropFee));
    localStorage.setItem("nonDropship", JSON.stringify(nonDropship));
    localStorage.setItem("cost", JSON.stringify(cost));
    localStorage.setItem("grandTotal", JSON.stringify(grandTotal));
    localStorage.setItem("checkbox", JSON.stringify(checkbox))
  }, [dropFee, nonDropship, cost, grandTotal, checkbox]);

  return (
    <Fragment>
      <BreadCrumb 
        isDelivery={isActive.deliveryActive}
        isPayment={isActive.paymentActive}
        isFinish={isActive.finishActive}
      />
      <FormWrapper>
        <RightSection>
          <DeliveryHeading>
            <Heading floatLeft>Delivery Details</Heading>
            <DeliveryDropship>
              <Checkbox
                type="checkbox"
                onChange={handleCheckbox}
              />
              <Text inline>Send as dropshipper</Text>
            </DeliveryDropship>
          </DeliveryHeading>
          <DeliveryInputSection>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <InputText
                placeholder='Email'
                type='text'
                name='email'
                theme={status.normal}
                {...register('email')}
              />
              <InputText
                placeholder='Dropshipper Name'
                type='text'
                name='dropshipperName'
                theme={status.normal}
                {...register('dropshipperName')}
                disabled={isDisabled}
              />
              <InputText
                placeholder='Phone Number'
                name='phoneNumber'
                theme={status.normal}
                {...register('phoneNumber')}
              />
              <InputText
                placeholder='Dropshipper Phone Number'
                name='dropshipPhone'
                theme={status.normal}
                {...register('dropshipPhone')}
                disabled={isDisabled}
              />
              <InputTextArea
                placeholder='Delivery Address'
                name='address'
                maxLength='120'
                theme={status.normal}
                {...register('address')}
              />
            </form>
          </DeliveryInputSection>
        </RightSection>
        <SummarySection 
          to='/shipment' 
          buttonText='Continue To Payment'
          cost={cost}
          dropFee={checkbox ? dropFee : nonDropship}
          grandTotal={checkbox ? grandTotal + dropFee : grandTotal}
        />
      </FormWrapper>
    </Fragment>
  )
};

export default DeliveryDetails;