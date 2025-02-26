const { writeDb } = require("./dbFunctions");

const food = [
  {
    name: "Banana",
    icon: "🍌",
    hp: 15,
    requiredSkill: 1,
    experience: 5,
    description:
      "Long ago, the banana was created to be monkey's best friends...",
  },
  {
    name: "Cherry",
    icon: "🍒",
    hp: 10,
    requiredSkill: 2,
    experience: 5,
    description: "Have you heard? Red small balls hanging from the trees",
  },
  {
    name: "Rabbit",
    icon: "🐇",
    hp: 35,
    requiredSkill: 6,
    experience: 10,
    description: "Hop-Hop-Bunny-Hop, hoping to catch it...",
  },
  {
    name: "Duck",
    icon: "🦆",
    hp: 35,
    requiredSkill: 8,
    experience: 10,
    description: "What the duck is this?",
  },
  {
    name: "Fish",
    icon: "🐟",
    hp: 30,
    requiredSkill: 7,
    experience: 15,
    description: "Sorry but, the most boring and beautyful sea creature",
  },
  {
    name: "Bird",
    icon: "🦃",
    hp: 35,
    requiredSkill: 8,
    experience: 18,
    description: "Just a bird? Or a turkey? It has wings so it's a birdkey !",
  },
];

writeDb(food);
