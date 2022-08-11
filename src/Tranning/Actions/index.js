export const status = () => {
  return {
    type: "status"
  };
};
export const sortAction = (sort) => {
  return {
    type: "sort",
    sort: sort
  };
};
