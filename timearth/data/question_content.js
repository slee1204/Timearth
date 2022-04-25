// export function totalResult(){
//     var result = [];

//     for (var i =0; i < 47; i++){
//         result.push(i+1)

//     }

// }
import { useRouter } from "next/router";

var answers = [];

export function storeChoice(cnum, score) {  

    answers[cnum] = score;
    console.log(answers);

}

export const result = {

    Excellent: {
        text: "00:20:00"
    },
    Good: {
        text: "00:10:00"
    },
    Okay: {
        text: "00:05:00"
    },
    Bad: {
        text: "00:00:00"
    }
}

export function getResults(cnum, score) {

    answers[cnum] = score;

    var res_sum = (answers[0] + answers[1] + answers[2] + answers[3] + answers[4] + answers[5] + answers[6] + answers[7] + answers[8] + answers[9] + answers[10] + answers[11])

    // var initialValue = 0;
    // var res_sum = answers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

    if ((res_sum === undefined) || (res_sum >= 0) && (score <= 11)) {
        return result.Bad.text 
    }
     
    if ((res_sum > 11) && (res_sum <= 23)){
    return result.Okay.text
    }
     
    if ((res_sum > 23) && (res_sum <= 35)){
        return result.Good.text
    }
     
    if (res_sum > 35) {
        return result.Excellent.text
    }

    console.log(res_sum)
}

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
