import React, { Fragment, useState, useEffect } from 'react';
import { FormWrapper, RightSection } from 'globalStyles';
import { BreadCrumb, Heading, SummarySection, ToggleButton } from 'components';
import { ShipmentPaymentSection } from './shipmentForm.element';

const ShipmentForm = () => {
  const [isActive] = useState({
    deliveryActive: true,
    paymentActive: true,
    finishActive: false
  });
  const [stateCheck, setStateCheck] = useState({
    gosend: false,
    jne: false,
    personal: false
  });
  const [payment, setStatePayment] = useState({
    ewallet: false,
    bank: false,
    virtual: false
  });

  const [shipment, setShipment] = useState({
    fee: 0,
    destination: 'Today',
    payment: 'e-Wallet'
  });

  const [shipmentName, setShipmentName] = useState('GO-SEND');
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
  const [grandTotal, setGrandTotal] = useState(() => {
    const getLocal = localStorage.getItem("grandTotal");
    const init = JSON.parse(getLocal);
    return init;
  });
  const [checkbox] = useState(() => {
    const getLocal = localStorage.getItem("checkbox");
    const init = JSON.parse(getLocal);
    return init;
  });

  const handleCheckedGosend = () => {
    setStateCheck({
      gosend: true,
      jne: false,
      personal: false
    });
    setShipment({
      fee: 15000,
      destination: 'Today',
      payment: 'e-Wallet'
    });
    setShipmentName('GO-SEND');
    setGrandTotal(() => {
      const getLocal = localStorage.getItem("grandTotal");
      const init = JSON.parse(getLocal) + shipment.fee;
      return init;
    });
  };

  const handleCheckedJne = () => {
    setStateCheck({
      gosend: false,
      jne: true,
      personal: false
    });
    setShipment({
      fee: 9000,
      destination: '2 Days',
      payment: 'e-Wallet'
    });
    setShipmentName('JNE');
    setGrandTotal(() => {
      const getLocal = localStorage.getItem("grandTotal");
      const init = JSON.parse(getLocal) + shipment.fee;
      return init;
    });
  };

  const handleCheckedPersonal = () => {
    setStateCheck({
      gosend: false,
      jne: false,
      personal: true
    });
    setShipment({
      fee: 29000,
      destination: '1 Days',
      payment: 'e-Wallet'
    });
    setShipmentName('Personal Courier');
    setGrandTotal(() => {
      const getLocal = localStorage.getItem("grandTotal");
      const init = JSON.parse(getLocal) + shipment.fee;
      return init;
    });
  };

  const handleCheckedEwallet = () => {
    setStatePayment({
      ewallet: true,
      bank: false,
      virtual: false
    });
    setShipment({
      fee: 15000,
      destination: 'Today',
      payment: 'e-Wallet'
    });
  };

  const handleCheckedBank = () => {
    setStatePayment({
      ewallet: false,
      bank: true,
      virtual: false
    });
    setShipment({
      fee: 15000,
      destination: 'Today',
      payment: 'Bank Transfer'
    });
  };

  const handleCheckedVirtual = () => {
    setStatePayment({
      ewallet: false,
      bank: false,
      virtual: true
    });
    setShipment({
      fee: 15000,
      destination: 'Today',
      payment: 'Virtual Account'
    });
  };

  useEffect(() => {
    localStorage.setItem("shipmentFee", JSON.stringify(shipment.fee));
    localStorage.setItem("shipmentPayment", JSON.stringify(shipment.payment));
    localStorage.setItem("shipmentDestination", JSON.stringify(shipment.destination));
    localStorage.setItem("shipmentName", JSON.stringify(shipmentName));
    localStorage.setItem("grandTotalShipment", JSON.stringify(grandTotal));
  }, [shipment.fee, shipment.payment, shipment.destination, shipmentName, grandTotal]);

  return (
    <Fragment>
      <BreadCrumb 
        isDelivery={isActive.deliveryActive}
        isPayment={isActive.paymentActive}
        isFinish={isActive.finishActive}
      />
      <FormWrapper>
        <RightSection>
          <Heading>Shipment</Heading>
          <ToggleButton 
            toggleName='gosend' 
            toggleText='GO-SEND'
            toggleFee='15,000'
            isSelected={stateCheck.gosend}
            handleChecked={handleCheckedGosend}
          />
          <ToggleButton 
            toggleName='jne' 
            toggleText='JNE'
            toggleFee='9,000'
            isSelected={stateCheck.jne}
            handleChecked={handleCheckedJne}
          />
          <ToggleButton 
            toggleName='personal' 
            toggleText='Personal Courier'
            toggleFee='29,000'
            isSelected={stateCheck.personal}
            handleChecked={handleCheckedPersonal}
          />
          <ShipmentPaymentSection>
            <Heading>Payment</Heading>
            <ToggleButton 
              toggleName='ewallet' 
              toggleText='e-Wallet'
              toggleFee='1,500,000 left'
              isSelected={payment.ewallet}
              handleChecked={handleCheckedEwallet}
            />
            <ToggleButton 
              toggleName='bank' 
              toggleText='Bank Transfer'
              toggleFee=''
              isSelected={payment.bank}
              handleChecked={handleCheckedBank}
            />
            <ToggleButton 
              toggleName='virtual' 
              toggleText='Virtual Account'
              toggleFee=''
              isSelected={payment.virtual}
              handleChecked={handleCheckedVirtual}
            />
          </ShipmentPaymentSection>
        </RightSection>
        <SummarySection
          shipment
          shipmentName={shipmentName}
          shipmentDestination={shipment.destination}
          shipmentFee={shipment.fee}
          to='success' 
          paymentName={shipment.payment}
          cost={cost}
          dropFee={checkbox ? dropFee : nonDropship}
          grandTotal={checkbox ? grandTotal + dropFee : grandTotal}
        />
      </FormWrapper>
    </Fragment>
  )
};

export default ShipmentForm;