import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonStyles = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  height: 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 2px solid transparent;
  transition: all 200ms ease-in-out;
  display: inline-flex;
  align-items: center;
`;

const PrimaryButtonStyles = styled(ButtonStyles)`
  background: #5044ff;
  box-shadow: 0px 4px 8px rgba(57, 63, 71, 0.2);
  color: #f9f9f9;

  &:focus {
    box-shadow: 0px 6px 16px rgba(57, 63, 71, 0.2);
    background: #483de5;
  }

  &:hover {
    box-shadow: 0px 6px 16px rgba(57, 63, 71, 0.2);
    background: #483de5;
  }

  &:active {
    box-shadow: 0px 6px 16px rgba(57, 63, 71, 0.3);
    background: #3e35c8;
  }
`;

const SecondaryButtonStyles = styled(ButtonStyles)`
  background: transparent;
  color: #5044ff;
  border-color: #5044ff;

  &:focus {
    border-color: #c3bfff;
  }

  &:hover {
    border-color: #483de5;
    background: #dad7ff;
  }

  &:active {
    background: #a9a3ff;
    color: #483de5;
    border-color: #877eff;
  }
`;

const Button = ({ children, href, type }) =>
  type === 'primary' ? (
    <PrimaryButtonStyles to={`${href}`}>{children}</PrimaryButtonStyles>
  ) : (
    <SecondaryButtonStyles to={`${href}`}>{children}</SecondaryButtonStyles>
  );

export default Button;
