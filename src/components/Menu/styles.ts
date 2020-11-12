import styled from 'styled-components';
import { shade } from 'polished';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  margin: 50px;
  width: 100px;
  height: 800px;

  background: #091929;
  border-radius: 15px;

  img {
    margin-top: 30px;
    margin-bottom: 35px;
  }

  svg {
    color: #fff;
    width: 25px;
    height: 25px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  svg:last-child  {
    margin: 50px;
    color: #ED8975;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ED8975')};
    }
  }
`;