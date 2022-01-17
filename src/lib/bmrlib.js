export const BMR = {
  genders: {
    Male: "0",
    Female: "1",
  },
  get_genders: () => {
    return Object.keys(BMR.genders).sort();
  },
  modifiers: {
    Inactive: {
      value: 1.16,
      desc: "Working From Home with Little to No Travel, No Exercise, Some Walking, Mostly Sitting or Laying",
    },
    Sedentary: {
      value: 1.2,
      desc: "Sedentary Lifestyle, Little or No Exercise, Moderate Walking, Desk Job (Away from Home)",
    },
    "Slightly active": {
      value: 1.375,
      desc: "Exercise or Light Sports 1 to 3 Days a Week, Light Jogging or Walking 3 to 4 Days a Week",
    },
    "Lightly active": {
      value: 1.425,
      desc: "Exercise or Moderate Sports 2 to 3 Days a Week, Light Jogging or Walking 5 to 7 Days a Week",
    },
    "Moderately active": {
      value: 1.55,
      desc: "Physical Work, Exercise, or Sports 4 to 5 Days a Week, Construction Laborer",
    },
    "Very active": {
      value: 1.725,
      desc: "Heavy Physical Work, Exercise, or Sports 6 to 7 Days a Week, Hard Laborer",
    },
    "Extra active": {
      value: 1.9,
      desc: "Very Heavy Physical Work or Exercise Every Day, Professional/Olympic Athlete",
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
      description:
        "This is the oldest set of equations by far. It was originally published in 1919. It illustrates how much the difference between men and women's energy utilization over the years has come. In our modern day and age it's much less. Some of this is due to the differences in body fat percentages but also may be attributed to the male dominated perceptions of the time.",
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
          return 10 * data.weight + 6.25 * data.height - 5 * data.age - 5;
        } else {
          return 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
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
        const lbm = (data.weight * (100 - data.bodyfat)) / 100;
        return 370 + 21.6 * lbm;
      },
    },
    "Katch-McArdle (Hybrid)": {
      order: 5,
      need_bf: true,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        const p = data.bodyfat / 100;
        return (
          370 * (1 - p) +
          21.6 * (data.weight * (1 - p)) +
          6.17 * (data.weight * p)
        );
      },
    },
    Cunningham: {
      order: 6,
      need_bf: true,
      description: "Blah de blah blah blah",
      calculate: (data) => {
        const p = data.bodyfat / 100;
        return 500 + 22 * (data.weight * (1 - p));
      },
    },
  },
  get_functions: () => {
    return Object.keys(BMR.functions).sort(
      (a, b) => BMR.functions[a].order - BMR.functions[b].order
    );
  },
};
