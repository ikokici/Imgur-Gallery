const getTypes = type => ({
  request: type + "_REQUEST",
  failure: type + "_FAILURE",
  success: type + "_SUCCESS"
});

const GET_IMGUR_GALLERIES = getTypes("GET_IMGUR_GALLERIES");

export { GET_IMGUR_GALLERIES };
