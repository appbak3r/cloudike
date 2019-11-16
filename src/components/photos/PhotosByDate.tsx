import groupBy from "lodash.groupby";
import React, { FC } from "react";
import styled from "styled-components";
import { PhotoItem } from "../../store/photos/types";
import { SquareGrid } from "../common/SquareGrid";
import { PhotoPreview } from "./PhotoPreview";

type Props = {
  photos: PhotoItem[];
};

const Wrapper = styled.div`
  position: relative;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 15px 20px;
`;

export const PhotosByDate: FC<Props> = ({ photos }) => {
  const groupedPhotos = groupBy(photos, photo => {
    return new Date(photo.originalDate).toLocaleDateString();
  });

  return (
    <>
      {Object.keys(groupedPhotos).map(date => {
        return (
          <Wrapper key={date}>
            <Header>{date}</Header>

            <SquareGrid>
              {groupedPhotos[date].map(item => (
                <PhotoPreview key={item.id} photo={item} />
              ))}
            </SquareGrid>
          </Wrapper>
        );
      })}
    </>
  );
};
