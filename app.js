let quotes =  [
  {
  quote:  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  author: "Henry David Thoreau"
  },
  {
  quote:  "You only live once, but if you do it right, once is enough.",
  author: "Mae West"
  },
  {
  quote:  "Life is really simple, but men insist on making it complicated.",
  author: "Confucius"
  },
  {
  quote:  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  author: "Winston Churchill"
  },  
  {
  quote:  "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
  author: "Johann Wolfgang Von Goethe"
  },
  {
  quote:  "The only limit to our realization of tomorrow will be our doubts of today.",
  author: "Franklin D. Roosevelt"
  },
  {
  quote:  "The best way to appreciate your job is to imagine yourself without one.",
  author: "Oscar Wilde"
  },
  {
  quote:  "Great things are done by a series of small things brought together.",
  author: "Vincent Van Gogh"
  },
  {
  quote:  "Work hard, be kind, and amazing things will happen.",
  author: "Conan O’Brien"
  },
  {
  quote:  "Never regret anything that made you smile.",
  author: "Mark Twain"
  },
  {
  quote:  "Be happy with what you have while working for what you want.",
  author: "Helen Keller"
  },
  {
  quote:  "Learn from the mistakes of others. You can’t live long enough to make them all yourself.",
  author: "Eleanor Roosevelt"
  },
  {
  quote:  "The best way to predict your future is to create it.",
  author: "Abraham Lincoln"
  },
  {
  quote:  "If you think you’re too small to make a difference, try sleeping with a mosquito.",
  author: "Dalai Lama"
  },
  {
  quote:  "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney"
  },
  {
  quote:  "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
  author: "Ray Goforth"
  },
  {
  quote:  "Don't be afraid to give up the good to go for the great.",
  author: "John D. Rockefeller"
  }
]

const btn = document.getElementById("main-btn");

btn.addEventListener("click", generateAQuote = () => {
  document.querySelector(".card").style.display = "block";
  let index = Math.floor(Math.random() * Math.floor(quotes.length));
  let generatedQuote = quotes[index];
  document.querySelector("h2").innerHTML = generatedQuote.quote;
  document.querySelector("h3").innerHTML = generatedQuote.author;
});