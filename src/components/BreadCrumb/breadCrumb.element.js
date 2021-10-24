import styled from 'styled-components';

export const BreadCrumbWrapper = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
`;

export const BreadCrumbNumber = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FF8A00;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  color: white;
  margin-right: 10px;
  opacity: ${props => props.isActive ? '1;' : '0.1;'};
`;

export const BreadCrumbText = styled.p`
  font-size: 16px;
  color: #FF8A00;
  display: inline;
  vertical-align: middle;
`;

export const BreadCrumbTextNumber = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  display: inline-block;
  vertical-align: middle;
  margin-top: 5px;
`;

export const BreadCrumbItem = styled.div`
  display: inline-block;
  margin-right: 20px;
`;