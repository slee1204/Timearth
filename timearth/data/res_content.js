import { getHighest, getLowest } from "./question_content";
import { getScore } from "./question_content";


export const PageTitle = "Today's Result";
export const BtnText1 = "Start Over";
export const BtnText2 = "See Challenges";

// export var goodResults = "";
// export var badResults = "";

// export function showGoodResults(i, highestScore) {
//     if ((i === 0) && (newArr[0] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 1) && (newArr[1] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 2) && (newArr[2] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 3) && (newArr[3] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 4) && (newArr[4] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 5) && (newArr[5] === highestScore)) {
//         return goodResults[i]
//     }
//     if ((i === 5) && (newArr[6] === highestScore)) {
//         return goodResults[i]
//     }
// }


export const HeaderTxt = {
    good: {
        txt: "Great Job!"
    },
    bad: {
        txt: "We Can Try Together!"
    }
}

export const goodResults = [
    {
        title: "You frequently used sustainable transportation!",
        desc: "Using public transportation could save the equivalent of 19 billion litres of gas in a year."
    },
    {
        title: "You had plant-based meals for most of this week!",
        desc: " A global shift to a plant-based diet could reduce greenhouse gases caused by food production by 70% within 30 years."
    },
    {
        title: "You kept your water usage low through your shower frequency!",
        desc: "Reducing one minute of shower time could save up to 227 litres of water per month."
    },
    {
        title: "You kept your electricity usage to a minimum!",
        desc: "Just by unplugging unused electronic devices / appliances, you can save up to 10% of energy consumption."
    },
    {
        title: "You produced a very small amount of waste!",
        desc: "Recycling 1 aluminum can could save enough energy to run a TV for 3 hours."
    },
    {
        title: "Your shopping habits were sustainable!",
        desc: "If we were to use reusable bags for a lifetime, more than 22,000 plastic bags could be removed from the environment."
    },

]

export const badResults = [
    {
        title: "You used personal transportation more often",
        desc: "One person driving a car could create up to 20lbs of carbon dioxide emissions everyday."
    },
    {
        title: "Try one meal at a time",
        desc: "If we have one meat-free meal per week, it would bring the same result as taking over 5million cars off the roads annually"

    },
    {
        title: "You spent longer time for a shower",
        desc: "With amount of water from 5 more minutes of shower, you can do laundry for 10 more minutes or flush the toilet three times"
    },
    {
        title: "idkidkidk",
        desc: "Be aware of Phantom Energy in your home while you are unaware of them. They account for about 10 % of household energy consumption"
    },
    {
        title: "You have produced a significant amount of waste",
        desc: "A single litre of used oil can contaminate a million litres of water."
    },
    {
        title: "You could've used more sustainable shopping material",
        desc: "Plastic bags are used for 12 min on average, but it takes over 500 years to be degraded in a landfill. Yet, they won/’t break down completely, but become microplastics."
    }
]