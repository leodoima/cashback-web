import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;

  ul{
    list-style: none;
  }

  li {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  font-size: 16px;

  button {
    height: 25px;
    width: auto;
    border-radius: 5px;
    border: 0;
    color: #091929;
    font-weight: bold;
    margin-top: 0;
    font-size: 12px;
  }
`;
