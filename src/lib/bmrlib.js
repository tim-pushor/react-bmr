export const BMR = {
  genders: {
    Male: "0",
    Female: "1",
  },
  get_genders: () => {
    return Object.keys(BMR.genders).sort();
  },
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
    return Object.keys(BMR.modifiers).sort(
      (a, b) => BMR.modifiers[a].value - BMR.modifiers[b].value
    );
  },
  functions: {
    "Harris-Benedict (Original 1919)": {
      order: 1,
      need_bf: false,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        if (data.isMale) {
          return (
            66.5 + 13.76 * data.weight + 5.003 * data.height - 6.755 * data.age
          );
        } else {
          return (
            655 + 9.563 * data.weight + 1.85 * data.height - 4.676 * data.age
          );
        }
      },
    },
    "Harris-Benedict (Revised 1984)": {
      order: 2,
      need_bf: false,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        if (data.isMale) {
          return (
            88.362 +
            13.397 * data.weight +
            4.799 * data.height -
            5.677 * data.age
          );
        } else {
          return (
            447.593 +
            9.247 * data.weight +
            3.098 * data.height -
            4.33 * data.age
          );
        }
      },
    },
    "Mifflin St Jeor": {
      order: 3,
      need_bf: false,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        if (data.isMale) {
          return (
            (10 * data.weight) +
            (6.25 * data.height) -
            (5 * data.age) - 5
          );
        } else {
          return (
            (10 * data.weight) +
            (6.25 * data.height) -
            (5 * data.age) - 161
          );
        }
      },
    },
    "Katch-McArdle": {
      order: 4,
      need_bf: true,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        console.log("Calculating");
        console.log(data);
        const lbm = data.weight * ( 100 - data.bodyfat ) / 100;
        return 370 + ( 21.6 * lbm);
      },
    },
    "Katch-McArdle (Hybrid)": {
      order: 5,
      need_bf: true,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        const p = data.bodyfat / 100;
        return (370 * (1-p)) + (21.6 * (data.weight * (1-p))) + (6.17 * (data.weight * p));
      },
    },
    "Cunningham": {
      order: 6,
      need_bf: true,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        const p = data.bodyfat / 100;
        return 500 + ( 22 * ( data.weight * ( 1-p)));
      },
    },
  },
  get_functions: () => {
    return Object.keys(BMR.functions).sort(
      (a, b) => BMR.functions[a].order - BMR.functions[b].order
    );
  },
};
