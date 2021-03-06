import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #091929;
  color: #091929;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      //border: 2px solid #c53030;
      color: #ED8975 !important;
    `}

  ${props =>
    props.isFocused &&
    css`
      //border: 2px solid #ED8975;
      color: #53D3D1;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #53D3D1;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #091929;

    &::placeholder {
      color: #091929;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
