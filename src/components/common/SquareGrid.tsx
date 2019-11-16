import styled from "styled-components";

const MIN_COLUMN_WIDTH = 300;

export const SquareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${MIN_COLUMN_WIDTH}px, 1fr));

  @media screen and (max-width: ${MIN_COLUMN_WIDTH * 2}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
