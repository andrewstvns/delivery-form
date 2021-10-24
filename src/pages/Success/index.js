import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper, RightSection } from 'globalStyles';
import { BreadCrumb, Heading, Button, Text, SummarySection } from 'components';

const Success = () => {
  const [orderId] = useState(Math.floor(Math.random()*90000) + 10000);
  const [isActive] = useState({
    deliveryActive: true,
    paymentActive: true,
    finishActive: true
  });
  const [shipmentFee] = useState(() => {
    const getLocal = localStorage.getItem("shipmentFee");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [shipmentPayment] = useState(() => {
    const getLocal = localStorage.getItem("shipmentPayment");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [shipmentName] = useState(() => {
    const getLocal = localStorage.getItem("shipmentName");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [shipmentDestination] = useState(() => {
    const getLocal = localStorage.getItem("shipmentDestination");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [dropFee] = useState(() => {
    const getLocal = localStorage.getItem("dropshippingFee");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [nonDropship] = useState(() => {
    const getLocal = localStorage.getItem("nonDropship");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [cost] = useState(() => {
    const getLocal = localStorage.getItem("cost");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [grandTotal] = useState(() => {
    const getLocal = localStorage.getItem("grandTotalShipment");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [checkbox] = useState(() => {
    const getLocal = localStorage.getItem("checkbox");
    const init = JSON.parse(getLocal);
    return init;
  });

  return (
    <Fragment>
      <BreadCrumb 
        isDelivery={isActive.deliveryActive}
        isPayment={isActive.paymentActive}
        isFinish={isActive.finishActive}
      />
      <FormWrapper>
        <RightSection>
          <Heading>Thank you</Heading>
          <Text bold>Order ID: {orderId}</Text>
          <Text blur>Your order will be delivered today with {shipmentName}</Text>
          <Link to='/'>
            <Button>Go To Homepage</Button>
          </Link>
        </RightSection>
        <SummarySection 
          success
          shipment
          shipmentName={shipmentName}
          shipmentFee={shipmentFee}
          shipmentDestination={shipmentDestination}
          paymentName={shipmentPayment}
          buttonText='Pay with e-wallet'
          cost={cost}
          dropFee={checkbox ? dropFee : nonDropship}
          grandTotal={checkbox ? grandTotal + dropFee + shipmentFee : grandTotal}
        />
      </FormWrapper>
    </Fragment>
  )
};

export default Success;