import React, { FC, memo, useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { PhotoItem } from "../../store/photos/types";
import { Spinner } from "../common/Spinner";

type Props = {
  photo: PhotoItem | null;
  onClose: () => void;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled(({ loading, ...props }) => (
  <img {...props} alt="preview" />
))`
  max-height: 80vh;
  max-width: 90vw;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: opacity 300ms linear;

  ${props =>
    props.loading &&
    css`
      opacity: 0;
    `}
`;

export const PhotoModal: FC<Props> = memo(({ photo, onClose }) => {
  useEffect(() => {
    const overflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  const [isLoaded, setLoaded] = useState(false);

  const onImageLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper>
      <Background onClick={onClose} />
      {(!photo || !isLoaded) && <Spinner />}
      {photo && (
        <Content src={photo.preview} loading={!isLoaded} onLoad={onImageLoad} />
      )}
    </Wrapper>
  );
});
