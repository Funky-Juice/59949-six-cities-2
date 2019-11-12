const offerTestObj = {
  id: 2,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  type: `Room`,
  price: 80,
  title: `Wood and stone place`,
  img: `room.jpg`,
  images: [`room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`],
  features: [`Entire place`],
  items: [`Wi-Fi`],
  rating: 3,
  isPremium: false,
  isFavorite: true,
  host: {
    avatar: `avatar-max.jpg`,
    name: `Max`,
    status: null
  },
  description: null,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198
  }
};

export default offerTestObj;
