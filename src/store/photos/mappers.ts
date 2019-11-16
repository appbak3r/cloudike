import { PhotoItem } from "./types";

export const mapPhotoItem = (item: any): PhotoItem => {
  return {
    id: item.id,
    created: item.created,
    updated: item.updated,
    small: item._links.image_middle.href,
    preview: item._links.image_preview.href,
    originalDate: item.created_original
  };
};
