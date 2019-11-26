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
