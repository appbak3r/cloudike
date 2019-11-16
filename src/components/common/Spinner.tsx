import styled from "styled-components";
import { ReactComponent as SpinnerIcon } from "../../assets/icons/spinner.svg";

export const Spinner = styled(SpinnerIcon)`
  fill: #fff;
  position: absolute;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
