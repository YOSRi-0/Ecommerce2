const GetIndex = (item, items) => {
  const index = items.findIndex((i) => i === item);
  return index;
};

export default GetIndex;
