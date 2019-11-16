import axios from "axios";

const defaultHeaders = () => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Client-ID 98b4249ba52e826"
  };

  return headers;
};

const successHandler = (response, dispatch, actions) => {
  if (response.data.success) {
    dispatch({ type: actions.success, payload: response.data.data });
  }
};

const api = {
  get: (keys, params = {}, actions, dispatch) => {
    const { section, sort, imageWindow, page } = keys;
    let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${imageWindow}/${page}`;
    dispatch({ type: actions.request });
    return axios({
      url: url,
      params: params,
      headers: defaultHeaders()
    })
      .then(function(response) {
        successHandler(response, dispatch, actions);
      })
      .catch(function(error) {});
  }
};

export default api;
