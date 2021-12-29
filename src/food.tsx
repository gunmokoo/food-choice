export const food = [
  {
    id: 0,
    name: "제육복음",
    material: ["돼지고기", "양파", "대파"],
    rank: 0,
    time: 30,
  },
  {
    id: 1,
    name: "김치찌개",
    material: ["돼지고기", "양파", "대파", "김치", "다진마늘"],
    rank: 0,
    time: 60,
  },
  {
    id: 2,
    name: "된장찌개",
    material: ["두부", "양파", "대파", "감자", "호박", "된장"],
    rank: 0,
    time: 30,
  },
  {
    id: 3,
    name: "까르보나라",
    material: ["스파게티면", "베이컨", "양송이버섯", "양파", "파마산치즈"],
    rank: 0,
    time: 30,
  },
  {
    id: 4,
    name: "토마토스파게티",
    material: ["스파게티면", "마늘", "양송이버섯", "방울토마토", "양파"],
    rank: 0,
    time: 30,
  },
  {
    id: 5,
    name: "알리오올리오",
    material: ["스파게티면", "다진마늘", "마늘", "페퍼론치노"],
    rank: 0,
    time: 15,
  },
  {
    id: 6,
    name: "베이컨볶음밥",
    material: ["베이컨", "대파", "계란"],
    rank: 0,
    time: 15,
  },
  {
    id: 7,
    name: "김치볶음밥",
    material: ["김치", "대파", "계란"],
    rank: 0,
    time: 10,
  },
  {
    id: 8,
    name: "계란말이",
    material: ["계란", "대파"],
    rank: 0,
    time: 15,
  },
  {
    id: 9,
    name: "김밥",
    material: ["김", "햄", "단무지", "오이", "당근", "어묵", "계란", "맛살"],
    rank: 0,
    time: 90,
  },
];

export interface IFood {
  id?: number;
  name: string;
  material: string[];
  rank?: number;
  time: number;
}
