import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { 
  SummaryWrapper, 
  SummaryBottomSection,
  SummaryCost,
  SummaryDropship
} from './summarySection.element';
import { Text, Button, Heading } from 'components';

const SummarySection = ({ 
  to, 
  buttonText, 
  success,
  shipment,
  cost,
  dropFee,
  shipmentName,
  shipmentFee,
  paymentName,
  shipmentDestination,
  grandTotal
}) => {
  return (
    <SummaryWrapper>
      <Heading>Summary</Heading>
      <Text blur>10 items puchased</Text>
      {shipment && (
        <Fragment>
          <Text blur>Delivery Destination</Text>
          <Text blur delivery bold>{shipmentDestination} by {shipmentName}</Text>
        </Fragment>
      )}
      {success && (
        <Fragment>
          <Text blur>Payment Method</Text>
          <Text blur delivery bold>{paymentName}</Text>
        </Fragment>
      )}
      <SummaryBottomSection>
        <SummaryCost>
          <Text blur floatLeft>Cost of goods</Text>
          <Text bold alignRight>{cost}</Text>
        </SummaryCost>
        <SummaryDropship>
          <Text blur floatLeft>Dropshipping Fee</Text>
          <Text bold alignRight>{dropFee}</Text>
        </SummaryDropship>
        {shipment && (
          <SummaryDropship>
            <Text blur floatLeft>{shipmentName} shipment</Text>
            <Text bold alignRight>{shipmentFee}</Text>
          </SummaryDropship>
        )}
        <Heading floatLeft>Total</Heading>
        <Heading alignRight>{grandTotal}</Heading>
        {!success && (
          <Link to={to}>
            {shipment ? (
                <Button>Pay with {paymentName}</Button>
              ) : (
                <Button>{buttonText}</Button>
              )
            }
          </Link>
        )}
      </SummaryBottomSection>
  </SummaryWrapper>
  )
};

export default SummarySection;