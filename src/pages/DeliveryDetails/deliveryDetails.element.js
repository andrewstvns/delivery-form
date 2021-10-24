import styled from 'styled-components';

export const DeliveryInputSection = styled.div`
  display: inline-block;
  width: 100%;
`;

export const DeliveryHeading = styled.div`
  display: inline-block;
  width: 100%;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;


export const DeliveryDropship = styled.div`
  display: block;
  float: right;
`;