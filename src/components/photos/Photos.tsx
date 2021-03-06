import React, { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  getMorePhotosRequest,
  getPhotosRequest
} from "../../store/photos/actions";
import { PhotosState } from "../../store/photos/types";
import { RootState } from "../../store/reducer";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { Spinner, SpinnerSize } from "../common/Spinner";
import { PhotosByDate } from "./PhotosByDate";

type OwnProps = {
  userId: number;
};
type DispatchProps = {
  getPhotos: typeof getPhotosRequest;
  getMorePhotos: typeof getMorePhotosRequest;
};
type StateProps = PhotosState;
type Props = OwnProps & StateProps & DispatchProps;

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

export const PhotosContext = React.createContext(0);

const EnhancedPhotos: FC<Props> = memo(
  ({ getPhotos, userId, next, loading, loaded, items, getMorePhotos }) => {
    useEffect(() => {
      getPhotos(userId);
    }, [getPhotos, userId]);

    return (
      <PhotosContext.Provider value={userId}>
        {loading && !loaded && (
          <Spinner alternative={true} size={SpinnerSize.SMALL} />
        )}

        <InfiniteScroll hasMore={!loading && !!next} onLoadMore={getMorePhotos}>
          <PhotosByDate photos={items} />
        </InfiniteScroll>
      </PhotosContext.Provider>
    );
  }
);

export const Photos: FC<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedPhotos);
