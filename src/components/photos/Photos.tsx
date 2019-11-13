import React, { FC, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import styled from "styled-components";
import {
  getMorePhotosRequest,
  getPhotosRequest
} from "../../store/photos/actions";
import { PhotosState } from "../../store/photos/types";
import { RootState } from "../../store/reducer";
import { PhotoPreview } from "./PhotoPreview";

type OwnProps = {
  userId: number;
};
type DispatchProps = {
  getPhotos: typeof getPhotosRequest;
  getMorePhotos: typeof getMorePhotosRequest;
};
type StateProps = PhotosState;
type Props = OwnProps & StateProps & DispatchProps;

const Wrapper = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
`;

const mapStateToProps = (state: RootState): PhotosState => {
  return state.photos;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getPhotos: getPhotosRequest,
      getMorePhotos: getMorePhotosRequest
    },
    dispatch
  );
};

const EnhancedPhotos: FC<Props> = ({
  getPhotos,
  userId,
  next,
  loading,
  items,
  loaded,
  getMorePhotos
}) => {
  useEffect(() => {
    getPhotos(userId);
  }, [getPhotos, userId]);

  return (
    <Wrapper
      hasMore={!loading && !!next}
      loadMore={getMorePhotos}
      threshold={500}
      useWindow={false}
    >
      {loaded && items.map(item => <PhotoPreview key={item.id} photo={item} />)}
    </Wrapper>
  );
};

export const Photos: FC<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedPhotos);
