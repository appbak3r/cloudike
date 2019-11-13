import React, { FC, InputHTMLAttributes, memo, ReactElement } from "react";
import styled from "styled-components";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string | ReactElement;
};

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bcc0c7;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 10px 15px;
  line-height: 1;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

export const Input: FC<Props> = memo(({ label, autoComplete, ...props }) => {
  return (
    <Wrapper>
      <StyledInput {...props} autoComplete={autoComplete || "off"} />

      {label && <Label>{label}</Label>}
    </Wrapper>
  );
});
