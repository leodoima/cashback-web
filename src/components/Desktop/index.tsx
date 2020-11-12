import React from 'react';

import Menu from '../Menu';
import { Container, Content } from './styles';

const Dashboard: React.FC = ({...rest }) => {
  return (
    <Container>
      <Menu />
      <Content {...rest} />
    </Container>
  );
}

export default Dashboard;
