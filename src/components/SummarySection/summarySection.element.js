import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: table-cell;
  width: 30%;
  border-left: 1px solid black;
  padding: 20px;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    border-left: unset;
  }
`;

export const SummaryBottomSection = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 205px;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const SummaryCost = styled.div`
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
`

export const SummaryDropship = styled.div`
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
`