// export function totalResult(){
//     var result = [];

//     for (var i =0; i < 47; i++){
//         result.push(i+1)

//     }

// }
import { useRouter } from "next/router";

export function storeChoice(qnum, cnum) {
  const r = useRouter();
  var { qnum } = r.query;
  

  if (qnum === undefined) {
    qnum = 0;
  }
  
  ops[1] = cnum;

}

// arr = [
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6
// ]

export const qs = [
    {
      title: "How do you usually commute to work/school?",
      ops: [
        {
          txt: "Automobile",
          score: 1,
        },
        {
          txt: "Public Transit",
          score: 2,
        },
        {
          txt: "Walk",
          score: 4,
        },
        {
          txt: "Bike",
          score: 3,
        },
      ],
        cat: "Transportation",
        img: "/transportation.svg"
    },
    {
      title: "How long is your commute?",
      ops: [
        {
          txt: "Less than 30 mins",
          score: 4,
        },
        {
          txt: "30 mins - 1hr",
          score: 3,
        },
        {
          txt: "1 - 2 hrs",
          score: 2,
        },
        {
          txt: "More than 2 hrs",
          score: 1,
          },
      ],
        cat: "Transportation",
        img: "/transportation.svg"
    },
    {
      title: "What kind of animal meat you eat most often for your meal?",
      ops: [
        {
          txt: "Beef",
          score: 2,
        },
        {
          txt: "Pork",
          score: 3,
        },
        {
          txt: "Poultry",
          score: 4,
        },
        {
          txt: "Lamb",
          score: 1,
        },
      ],
        cat: "Eating Habits",
        img: "/food.svg"
    },
  
    {
      title: "How often do you eat animal meat that you have selected?",
      ops: [
        {
          txt: "Everyday",
          score: 1,
        },
        {
          txt: "Once or twice a week",
          score: 3,
        },
        {
          txt: "3-4 times a week",
          score: 2,
        },
        {
          txt: "I rarely eat animal meat",
          score: 4,
        },
      ],
        cat: "Eating Habits",
        img: "/food.svg"
    },
    {
      title: "How often do you take showers?",
      ops: [
        {
          txt: "Once a day",
          score: 2,
        },
        {
          txt: "Twice a day or more",
          score: 1,
        },
        {
          txt: "Once every two days or more",
          score: 3,
        },
        {
          txt: "Once a week or less",
          score: 4,
        },
      ],
        cat: "Water Usage",
        img: "/water.svg"
    },
    {
      title: "How long are your showers?",
      ops: [
        {
          txt: "Less than 10 mins",
          score: 4,
        },
        {
          txt: "10 - 30 mins",
          score: 3,
        },
        {
          txt: "30 mins - 1 hour",
          score: 2,
        },
        {
          txt: "More than an hour",
          score: 1,
        },
      ],
        cat: "Water Usage",
        img: "/water.svg"
    },
    {
      title: "How much time did you spend on your devices today?",
      ops: [
        {
          txt: "Smartphone",
          score: 2,
        },
        {
          txt: "Laptop",
          score: 1,
        },
        {
          txt: "iPad",
          score: 3,
        },
        {
          txt: "Desktop",
          score: 4,
        },
      ],
        cat: "Electricity Usage",
        img: "/electricity.svg"
    },
    {
      title: "How much time do you spend with the lights on?",
      ops: [
        {
          txt: "Less than 30 mins in a day",
          score: 4,
        },
        {
          txt: "30 mins - 2 hrs in a day",
          score: 3,
        },
        {
          txt: "2 - 4 hrs in a day",
          score: 2,
        },
        {
          txt: "More than 4 hrs in a day",
          score: 1,
        },
      ],
        cat: "Electricity Usage",
        img: "/electricity.svg"
    },
    {
      title: "How much waste did you produce today?",
      ops: [
        {
          txt: "Landfill Garbage",
          score: 4,
        },
        {
          txt: "Glass",
          score: 3,
        },
        {
          txt: "Cardboard / Paper",
          score: 2,
        },
        {
          txt: "Plastics",
          score: 1,
        },
      ],
        cat: "Waste",
        img: "/waste.svg"
    },
    {
      title: "How much of your waste did you recycle today?",
      ops: [
        {
          txt: "Less than 20%",
          score: 2,
        },
        {
          txt: "20% - 50%",
          score: 1,
        },
        {
          txt: "50% - 80%",
          score: 3,
        },
        {
          txt: "More than 80%",
          score: 4,
        },
      ],
        cat: "Waste",
        img: "/waste.svg"
    },
    {
      title: "What kind of shopping bags do you use most frequently?",
      ops: [
        {
          txt: "Plastic bags",
          score: 1,
        },
        {
          txt: "Paper bags",
          score: 2,
        },
        {
          txt: "Reusable bags",
          score: 4,
        },
      ],
        cat: "Shopping Habits",
        img: "/shopping.svg"
    },
    {
      title: "How often do you receive paper receipts?",
      ops: [
        {
          txt: "Always",
          score: 1,
        },
        {
          txt: "Sometimes",
          score: 2,
        },
        {
          txt: "Rarely",
          score: 3,
        },
        {
          txt: "Everything is paperless",
          score: 4,
        },
      ],
        cat: "Shopping Habits",
        img: "/shopping.svg"
    },
  ];
  // var answers = [];
  
  // export function changeAnswers(n, qscore) {
  //     answers[qscore] = n;
  //     console.log(answers);
  // }
  
  // export function getAnswers() {
  //     return answers;
  // }
  
// var answers = [];

// export function changeAnswers(n, qscore) {
//     answers[qscore] = n;
//     console.log(answers);
// }

// export function getAnswers() {
//     return answers.score[i];
// }
