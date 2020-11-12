import React from 'react';
import { FiHome, FiActivity, FiCreditCard, FiRepeat,FiUsers, FiLogOut, FiFileText, FiShoppingCart } from 'react-icons/fi';

import { Container, Menu, Content } from './styles';
import logoMova from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu>
        <img src={logoMova} alt=""/>
        <FiHome />
        <FiActivity />
        <FiCreditCard />
        <FiRepeat />
        <FiFileText />
        <FiUsers />
        <FiShoppingCart />
        <FiLogOut />
      </Menu>
      <Content></Content>
    </Container>
  );
}

export default Dashboard;
