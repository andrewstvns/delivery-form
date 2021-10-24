import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle, { Container } from './globalStyles';
import { DeliveryDetails, ShipmentForm, Success } from 'pages';

const Wrapper = styled.div`
  background-color: #FFFAE6;
  min-height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Switch>
            <Route path='/' exact component={DeliveryDetails} />
            <Route path='/shipment' exact component={ShipmentForm} />
            <Route path='/success' exact component={Success} />
          </Switch>
        </Container>
      </Wrapper>
    <GlobalStyle />
  </Router>
  );
}

export default App;
