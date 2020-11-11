import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex; 
`;

export const Description = styled.div`   
  display: flex;
  flex-direction: column;
  padding: 80px;

  height: 100%;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  > ul li {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background: #091929;
    margin-left: 15px;
  }
`;

export const Menu = styled.div` 
  display: flex;

  nav ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    font-size: 22px;
    font-weight: 900;
    opacity: 0.6;
    margin-left: 100px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#53D3D1')};
    }
  }

  nav ul li:first-child {
    opacity: 1;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    max-width: 550px;

    font-size: 110px;
    font-weight: bold;
    line-height: 110px;
    letter-spacing: -3.5px;
  }

  p{
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    opacity: 0.6;

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
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #fff;
  width: 450px;
  height: 550px;

  margin-right: 500px;
  border-radius: 15px;

  form {
    margin: 65px 0;
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
        color: ${shade(0.2, '#53D3D1')};
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
