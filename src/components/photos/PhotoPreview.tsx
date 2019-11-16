import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PhotoItem } from "../../store/photos/types";
import { PhotosContext } from "./Photos";

type Props = {
  photo: PhotoItem;
  className?: string;
};

const StyledLink = styled(({ image, ...props }) => <Link {...props} />)`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${props => props.image}");
`;

export const PhotoPreview: FC<Props> = ({ photo, className }) => {
  const { id, small } = photo;

  return (
    <PhotosContext.Consumer>
      {userId => (
        <StyledLink
          className={className}
          to={`/photos/${userId}/${id}`}
          image={small}
        />
      )}
    </PhotosContext.Consumer>
  );
};
