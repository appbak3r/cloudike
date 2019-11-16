import React, { FC, SVGAttributes } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as SpinnerIcon } from "../../assets/icons/spinner.svg";

export enum SpinnerSize {
  SMALL,
  LARGE
}

export const StyledSpinnerIcon = styled(({ alternative, size, ...props }) => (
  <SpinnerIcon {...props} />
))`
  fill: #fff;
  position: absolute;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  ${props =>
    props.alternative &&
    css`
      fill: #98a0bc;
    `}
  ${props =>
    props.size === SpinnerSize.SMALL &&
    css`
      height: 80%;
    `}
  
  ${props =>
    props.size === SpinnerSize.SMALL &&
    css`
      width: 50px;
      height: 50px;
    `}
`;

type Props = {
  alternative?: boolean;
  size?: SpinnerSize;
} & SVGAttributes<SVGElement>;

export const Spinner: FC<Props> = ({
  alternative,
  size = SpinnerSize.LARGE,
  ...props
}) => {
  return <StyledSpinnerIcon {...props} alternative={alternative} size={size} />;
};
