import { data } from "../data/info";

export const getInfoById = (id) => {
  return data.find((d) => d.id === id);
};
