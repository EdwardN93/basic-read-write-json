const { writeDb } = require("./dbFunctions");

const food = [
  {
    name: "Banana",
    icon: "🍌",
    hp: 15,
    requiredSkill: 1,
    experience: 5,
  },
  {
    name: "Cherry",
    icon: "🍒",
    hp: 10,
    requiredSkill: 2,
    experience: 5,
  },
  {
    name: "Rabbit",
    icon: "🐇",
    hp: 35,
    requiredSkill: 6,
    experience: 10,
  },
  {
    name: "Duck",
    icon: "🦆",
    hp: 35,
    requiredSkill: 8,
    experience: 10,
  },
  {
    name: "Fish",
    icon: "🐟",
    hp: 30,
    requiredSkill: 7,
    experience: 15,
  },
];

writeDb(food);
