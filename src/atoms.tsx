import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const foodAtom = atom({
  key: "food",
  default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
});
