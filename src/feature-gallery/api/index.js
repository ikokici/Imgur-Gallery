import base from "../../shared-api";
import { GET_IMGUR_GALLERIES } from "../actionTypes";

const api = {
  getImgurGallery: (keys, params, dispatch) =>
    base.get(keys, params, GET_IMGUR_GALLERIES, dispatch)
};

export default api;
