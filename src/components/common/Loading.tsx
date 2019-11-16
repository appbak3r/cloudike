import React, { FC, memo } from "react";
import styled from "styled-components";
import { Spinner, SpinnerSize } from "./Spinner";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading: FC = memo(() => {
  return (
    <Wrapper>
      <Spinner alternative={true} size={SpinnerSize.SMALL} />
    </Wrapper>
  );
});
