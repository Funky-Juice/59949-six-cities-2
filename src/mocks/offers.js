export const offers = [
  {
    id: 1,
    type: `Apartment`,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    img: `apartment-01.jpg`,
    images: [`apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    items: [`Wi-Fi`, `Dishwasher`, `Dishwasher`, `Cabel TV`, `Coffee machine`],
    rating: 5,
    isPremium: true,
    isFavorite: false,
    host: {
      avatar: `avatar-angelina.jpg`,
      name: `Angelina`,
      status: `Pro`
    },
    description: `<p>
              A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
              building is green and from 18th century.
            </p>
            <p>
              An independent House, strategically located between Rembrand Square and National Opera, but where the
              bustle of the city comes to rest in this alley flowery and colorful.
            </p>`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    }
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    type: `Hotel`,
    price: 220,
    title: `Canal View Prinsengracht`,
    img: `apartment-02.jpg`,
    images: [`apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`],
    features: [],
    items: [`Wi-Fi`, `Dishwasher`],
    rating: 5,
    isPremium: true,
    isFavorite: false,
    host: {
      avatar: null,
      name: `Antony`,
      status: null
    },
    description: null,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198
    }
  },
  {
    id: 4,
    type: `House`,
    price: 180,
    title: `Nice, cozy, warm big bed apartment`,
    img: `apartment-03.jpg`,
    images: [`apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`],
    features: [],
    items: [],
    rating: 4,
    isPremium: false,
    isFavorite: false,
    host: {
      avatar: null,
      name: null,
      status: null
    },
    description: null,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    }
  }
];
