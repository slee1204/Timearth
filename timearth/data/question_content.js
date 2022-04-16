export const qs = [
    {
        title: "How do you usually commute to work/school?",
        ops: [
            "Automobile",
            "Public Transit",
            "Walk",
            "Bike"
        ],
        cat: "Transportation"
    },
    {
        title: "How long is your commute?",
        ops: [
            "Less than 30 mins",
            "30 mins -1 hour",
            "1 - 2 hour",
            "More than 2 hours"
        ],
        cat: "Transportation"
    },
    {
        title: "What kind of animal meat you eat most often for your meal?",
        ops: [
            "Beef",
            "Pork",
            "Poultry",
            "Lamb"
        ],
        cat: "Eating Habits"
    },

    {
        title: "How often do you eat animal meat that you have selected?",
        ops: [
            "Everyday",
            "Once or twice a week",
            "3-4 times a week",
            "I rarely eat animal meat"
        ],
        cat: "Eating Habits"
    },
    {
        title: "How often do you take showers?",
        ops: [
            "Once a day",
            "Twice a day or more",
            "Once every two days or more",
            "Once a week or less"
        ],
        cat: "Water Usage"
    },
    {
        title: "How long are your showers?",
        ops: [
            "Less than 10 mins",
            "10 - 30 mins",
            "30 mins - 1 hour",
            "More than an hour"
        ],
        cat: "Water Usage"
    },
    {
        title: "How much time did you spend on your devices today?",
        ops: [
            "Smartphone",
            "Laptop",
            "iPad",
            "Desktop"
        ],
        cat: "Electricity Usage"
    },
    {
        title: "How much time do you spend with the lights on?",
        ops: [
            "Less than 30 mins in a day ",
            "30 mins - 2 hours in a day",
            "2 - 4 hours in a day",
            "More than 4 hours in a day"
        ],
        cat: "Electricity Usage"
    },
    {
        title: "How much waste did you produce today?",
        ops: [
            "Landfill Garbage",
            "Glass",
            "Cardboard / Paper",
            "Plastics"
        ],
        cat: "Waste"
    },
    {
        title: "How much of your waste did you recycle today?",
        ops: [
            "Less than 20%",
            "20% - 50%",
            "50% - 80%",
            "More than 80%"
        ],
        cat: "Waste"
    },
    {
        title: "What kind of shopping bags do you use most frequently?",
        ops: [
            "Plastic bags",
            "Paper bags",
            "Reusable bags",
        ],
        cat: "Shopping Habits"
    },
    {
        title: "How often do you receive paper receipts?",
        ops: [
            "Always",
            "Sometimes",
            "Rarely",
            "Everything is paperless"
        ],
        cat: "Shopping Habits"
    }
]
var answers = [];

export function changeAnswers(n, qnum) {
    answers[qnum] = n;
    console.log(answers);
}

export function getAnswers() {
    return answers;
}
