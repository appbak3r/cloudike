import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Label as TextLabel, StyledInput as TextInput } from "./Input";

type Props = {
  error?: string;
  hasError: boolean;
};

const Wrapper = styled(({ hasError, ...props }) => <div {...props} />)`
  position: relative;

  ${props =>
    props.hasError &&
    css`
      ${TextInput} {
        border-color: #f35159;
      }

      ${TextLabel} {
        color: #f35159;
      }
    `}
`;

const Error = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 3px;
  color: #f35159;
  font-size: 0.8rem;
`;

export const FieldError: FC<Props> = ({ error, hasError, children }) => {
  return (
    <Wrapper hasError={hasError}>
      {hasError && <Error>{error}</Error>}

      {children}
    </Wrapper>
  );
};
