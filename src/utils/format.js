export const formatNumberToTime = (number) => {
  if (number > 9) return number.toString();

  return `0${number.toString()}`;
};
