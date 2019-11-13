import React, { FC, memo, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(({ isTabMode, ...props }) => <div {...props} />)`
  height: 100%;

  a,
  select,
  input,
  textarea,
  button {
    &:focus {
      ${props => !props.isTabMode && `outline:none`};
    }
  }
`;

export const TabMode: FC = memo(({ children }) => {
  const [isEnabled, setEnabled] = useState(false);

  useEffect(() => {
    const onMouseMove = () => {
      setEnabled(false);

      document.removeEventListener("mousemove", onMouseMove);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        setEnabled(true);
      }

      document.addEventListener("mousemove", onMouseMove);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <Wrapper isTabMode={isEnabled}>{children}</Wrapper>;
});
