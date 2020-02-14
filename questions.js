
const questions = [
    { type: "list", name: "post or bid", message: "Do you want to post an item or bid on an item?", choices: "post/bid" },
    { type: "input", name: "postProduct", message: "Item product"},
    { type: "input", name: "postPrice", message: "Item price"},
    { type: "input", name: "bidChoice", message: "what would you like to bid on? (enter id number)"},
    { type: "input", name: "bidNumber", message: "Enter bid amount"}
];

const getQuestions = () => questions;

module.exports = getQuestions;