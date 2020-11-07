import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`;

export const Description = styled.div`   
  display: flex;
  flex-direction: column;
 
  margin-left: 70px;

  h1{
    max-width: 550px;
    font-size: 110px;
    line-height: 110px;
    letter-spacing: -3.5px;
  }

  p {
    font-size: 25px;
    line-height: 32px;

    color: #091929;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;

  background: #091929;
  margin-left:auto;

  width: 100%;
  max-width: 500px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;

  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 500px;
  height: 600px;

  margin-right: 500px;
  border-radius: 15px;
 
  img {
    width: 265px;
    height: 102px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    input {
      background: #fff;
      border-radius: 10px;
      border: 2px solid #fff;
      width: 100%;
      color: #091929;

      &::placeholder {
        color: #858585;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #53D3D1;
      border-radius: 10px;
      border: 0;
      height: 56px;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#53D3D1')};
      }
    }

    a {
      color: #091929;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#091929')};
      }
    }
  }

  a {
    color: #ED8975;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ED8975')};
    }
  }
`;
