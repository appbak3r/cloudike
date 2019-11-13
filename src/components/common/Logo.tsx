import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

type Props = {
  alternative?: boolean;
};
export const Logo = styled(({ alternative, ...props }: Props) => (
  <LogoIcon {...props} />
))`
  fill: #fff;

  ${props =>
    props.alternative &&
    css`
      fill: #4283ee;
    `}
`;
