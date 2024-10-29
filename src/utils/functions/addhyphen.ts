// utils.ts
export const AddHyphen = (CenterValues: any) => {
  const Search1 = CenterValues.replace(", ", "-");
  const Search = Search1.replace(/\s+/g, "+");
  return Search;
};
