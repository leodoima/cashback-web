import React from 'react';

import Menu from '../Menu';
import Details from '../Details';
import { Container, Content } from './styles';

const Dashboard: React.FC = ({...rest }) => {
  return (
    <Container>
      <Menu />
      <Content {...rest}>
        <Details />
      </ Content>
    </Container>
  );
}

export default Dashboard;
