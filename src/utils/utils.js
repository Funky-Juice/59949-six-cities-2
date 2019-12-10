export const getPlural = (number, one, two, five) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

export const calcRatingPercent = (rating) => {
  const maxRating = 5;
  const maxRatingPercent = 100;

  return Math.round(rating * maxRatingPercent / maxRating);
};

export const sortOffersByCity = (offers) => {
  offers.sort((a, b) => {
    if (a.city.name < b.city.name) {
      return -1;
    }
    if (a.city.name > b.city.name) {
      return 1;
    }
    return 0;
  });
};

export const groupOffersByCity = (data) => {
  return data.reduce((r, a) => {
    r[a.city.name] = r[a.city.name] || [];
    r[a.city.name].push(a);
    return r;
  }, Object.create(null));
};

export const sortReviewsByDate = (reviews) => {
  return reviews.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
};
