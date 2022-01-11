export const BMR  = {
  modifiers: {
    Sedentary: { value: 1.2, desc: "little or no exercise, desk job" },
    "Slightly active": {
      value: 1.375,
      desc: "light exercise/ sports 1-3 days/week",
    },
    "Lightly active": { value: 1.425, desc: "???" },
    "Moderately active": {
      value: 1.55,
      desc: "moderate exercise/ sports 6-7 days/week",
    },
    "Very active": {
      value: 1.725,
      desc: "hard exercise every day, or exercising 2 xs/day",
    },
    "Extra active": {
      value: 1.9,
      desc: "hard exercise 2 or more times per day, training for marathon, or triathlon, etc.",
    },
  },
  get_modifiers: () => {
    return Object.keys(BMR.modifiers).sort((a,b) => BMR.modifiers[a].value - BMR.modifiers[b].value);
  },
  functions: {
    "Harris-Benedict (Original 1919)": {
      order: 1,
      need_bf: false,
      description: "Blah de blah blah blah",
      function: (data) => {
        if (data.male) {
          return 88.362 + 13.397 * data.weight + 4.799 * data.height - 5.677 * data.age;
        } else {
          return 447.593 + 9.247 * data.weight + 3.098 * data.height - 4.33 * data.age;
        }
      },
    },
  },
  get_functions: () => {
    return Object.keys(BMR.functions).sort((a,b) => BMR.modifiers[a].value - BMR.modifiers[b].value);
  },
};
