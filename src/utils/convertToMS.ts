export const convertToMS = (hours: number, minutes: number) => {
  return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000)
};