const generateProducts = () =>
  new Array(5).fill(
    {
      title: 'Hamster House Wood',
      price: 96,
      imageURL:
        'https://m.media-amazon.com/images/I/71N73mb3xcL._AC_SL1500_.jpg',
    },
    0,
    9,
  );

export default generateProducts;
