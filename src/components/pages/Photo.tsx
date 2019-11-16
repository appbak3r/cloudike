import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { PhotoService } from "../../services/PhotoService";
import { mapPhotoItem } from "../../store/photos/mappers";
import { PhotoItem } from "../../store/photos/types";
import { PhotoModal } from "../photos/PhotoModal";

type Props = {} & RouteComponentProps<{
  id: string;
  userId: string;
}>;

export const Photo: FC<Props> = memo(({ match, history }) => {
  const onClose = useCallback(() => {
    history.push("/");
  }, [history]);

  const { id, userId } = match.params;

  const [photo, setPhoto] = useState<PhotoItem | null>(null);

  useEffect(() => {
    PhotoService.get(parseInt(userId, 10), id)
      .then(data => {
        setPhoto(mapPhotoItem(data));
      })
      .catch(() => {
        onClose();
      });
  }, [id, userId, onClose]);

  return <PhotoModal photo={photo} onClose={onClose} />;
});
