import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import {Container, Header, Footer} from './styles';
import Button from '../Button';

const Details: React.FC = () => {
  return(
    <Container>
      <Header>
        <ul>
          <li>Usuários <FiChevronRight /></li>
          <li>Lista</li>
        </ul>
        <h5>Voltar</h5>
      </Header>
      <Footer>
        <span>Lista de usuários</span>
        <Button>Criar</Button>
      </Footer>
    </Container>
  );
}

export default Details;