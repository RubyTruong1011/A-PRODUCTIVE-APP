const quotes = [
    {
        quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        author: "Stephen King",
    },
    {
        quote: "If you spend too much time thinking about a thing, you'll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "Productivity is being able to do things that you were never able to do before.",
        author: "Franz Kafka",
    },
    {
        quote: "Nothing is a mistake. There’s no win and no fail. There’s only make.",
        author: "Corita Kent",
    },
    {
        quote: "To be disciplined is to follow in a good way. To be self disciplined is to follow in a better way.",
        author: "Corita Kent",
    },
    {
        quote: "Focus on being productive instead of busy.",
        author: "Tim Ferriss",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Sometimes, things may not go your way, but the effort should be there every single night.",
        author: "Michael Jordan",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney, American entrepreneur",
    },
    {
        quote: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.",
        author: "Leo Babauta",
    },
];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.classList.add("quote_css");
author.classList.add("author_css");

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

