import React, { ButtonHTMLAttributes, FC, memo } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as SpinnerIcon } from "../../assets/icons/spinner.svg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Spinner = styled(SpinnerIcon)`
  fill: #fff;
  position: absolute;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled(({ isLoading, ...props }) => <button {...props} />)`
  background-color: #407be2;
  color: #fff;
  position: relative;
  border: none;
  border-radius: 4px;
  display: inline-flex;
  height: 56px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 0 55px;
  font-size: 15px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #4283ee;
  }

  &:active {
    box-shadow: inset 0 1px 2px 0 #407be2;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${props =>
    props.isLoading &&
    css`
      pointer-events: none;
      color: transparent;
    `}
`;

export const Button: FC<Props> = memo(({ children, isLoading, ...props }) => {
  return (
    <StyledButton {...props} isLoading={isLoading}>
      {children}

      {isLoading && <Spinner />}
    </StyledButton>
  );
});
