import React, { useEffect } from "react";
import { connect } from "react-redux";
import api from "../api";
import { totalImages } from "../selectors";
import { GridGallery, ImageDiv } from "./styles";

const { getImgurGallery } = api;

const ImgurGallery = props => {
  const { getImgurGallery, images } = props;
  useEffect(() => {
    getImgurGallery();
  }, [getImgurGallery]);
  return (
    <GridGallery>
      {images.map(image => (
        <div key={image.id}>
          <ImageDiv src={image.link} />
          <div>{image.title}</div>
        </div>
      ))}
    </GridGallery>
  );
};

const mapStateToProps = state => {
  return {
    images: totalImages(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getImgurGallery: () =>
      getImgurGallery(
        { section: "hot", sort: "viral", imageWindow: "day", page: 1 },
        { showViral: true, mature: false },
        dispatch
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgurGallery);
