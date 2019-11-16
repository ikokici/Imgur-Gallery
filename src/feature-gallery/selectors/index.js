import { createSelector } from "reselect";
import transform from "./transform";

const getImages = state => state.images;

const totalImages = createSelector(getImages, images => {
  return transform.images(images);
});

export { totalImages };
