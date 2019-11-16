const transform = {
  images: (data = []) =>
    data.map(image => ({
      link: image.link,
      id: image.id,
      title: image.title
    }))
};

export default transform;
