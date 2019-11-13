import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PhotoItem } from "../../store/photos/types";

type Props = {
  photo: PhotoItem;
};

const Wrapper = styled(({ image, ...props }) => <div {...props} />)`
   background-image: url("${props => props.image}");
   background-repeat: no-repeat;
   width: 200px;
   height: 200px;
`;

export const PhotoPreview: FC<Props> = ({ photo }) => {
  const { id, small } = photo;

  return (
    <Link to={`/photos/${id}`}>
      <Wrapper image={small} />
    </Link>
  );
};
