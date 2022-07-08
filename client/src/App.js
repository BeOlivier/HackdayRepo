import React from 'react';
import './App.css';
import { useState , useEffect} from 'react';
  

// console.log(quotes);
  
//   return (
//     <>
//     <div className="App">
//       <h1>Movie Quotes</h1>
//       <div>{quotes.answer3}</div>
//     </div>
//     </>
//   );
// // }

// function App() {
//   // fetch the data from the APi with address https://localhost:7155/api/MovieQuotes and store it in the variable quotes
//   const [quotes, setQuotes] = useState([]);
//   useEffect(() => {
//     fetch("https://localhost:7155/api/MovieQuotes")
//     .then(res => res.json())
//     .then(data => setQuotes(data))
//   }
//   , []);

// // store array of objects from the api in 5 different objects with properties quoteId, quote, answer1, answer2, answer3
//   // const [quoteId, setQuoteId] = useState(quotes[0].quoteId);
//   // const [quote, setQuote] = useState(quotes[0].quote);
//   // const [answer1, setAnswer1] = useState(quotes[0].answer1);
//   // const [answer2, setAnswer2] = useState(quotes[0].answer2);
//   // const [answer3, setAnswer3] = useState(quotes[0].answer3);

// console.log(quotes);

//   return (
//     <>
//     <div className="App">
//       <h1>Movie Quotes</h1>
//       <div></div>
//     </div>
//     </>
//   );
// }

const quoteInitial = [
  {
    text: "Where have you heard this quote: 'Yippee-ki-yay motherf***er'?",
    options: [
      { id: 0, text: "Die Hard", isCorrect: true },
      { id: 1, text: "Terminator", isCorrect: false },
      { id: 2, text: "Winnie the Pooh", isCorrect: false },
      { id: 3, text: "Tomb Raider", isCorrect: false },
    ],
  },
  {
    text: "Where have you heard this quote: 'The eagles are coming!'?",
    options: [
      { id: 0, text: "Birdemic", isCorrect: false },
      { id: 1, text: "Harry Potter 3 - Prisoner of Azkaban", isCorrect: false },
      { id: 2, text: "Star Wars I - The Phantom Menace", isCorrect: false },
      { id: 3, text: "Lord of the Rings 3 - The return of the King", isCorrect: true },
    ],
  },
  {
    text: "Where have you heard this: 'War, what is it good for?'?",
    options: [
      { id: 0, text: "Star Wars", isCorrect: false },
      { id: 1, text: "War and Peace", isCorrect: false },
      { id: 2, text: "Seinfeld", isCorrect: true },
      { id: 3, text: "All of the above", isCorrect: false },
    ],
  },
  {
    text: "Where have you heard this: 'I'm just a girl, standing in front of a boy, asking him to love her.'?",
    options: [
      { id: 0, text: "Clockwork Orange", isCorrect: false },
      { id: 1, text: "When Harry Met Sally", isCorrect: false },
      { id: 2, text: "Notting Hill", isCorrect: true },
      { id: 3, text: "Interstellar", isCorrect: false },
    ],
  },
  {
    text: "Where have you heard this: 'What does Marcellus Wallace look like???'?",
    options: [
      { id: 0, text: "Django Unchained", isCorrect: false },
      { id: 1, text: "Pulp Fiction", isCorrect: true },
      { id: 2, text: "The Shining", isCorrect: false },
      { id: 3, text: "Huckleberry Finn", isCorrect: false },
    ],
  },
];


  // const [quotes, setQuotes] = useState(0);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   let response = await (
  //     await fetch("https://localhost:7155/api/MovieQuotes")
  //   ).json();
  //   setQuotes(response);
  // };

  // const [quotes, setQuote] = useState([]);
  // useEffect(() => {
  //   fetch('https://localhost:7155/api/MovieQuotes')
  //   .then(res => res.json())
  //   .then(data => setQuote(data))
  // }, []);

  // console.log(quotes)

  // THIS WORKED BUT ITERATED THROUGH THE ARRAY
  // return (
  //   <>
  //   <div>
  //     {quotes.map((item,i) => (
  //           <div key={i}> 
  //             <div>{item.quote}</div>
  //           </div>
  //         ))}
  //   </div>
  //   </>
  // );
function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Where have you heard this quote: 'Yippee-ki-yay motherf***er'?",
      options: [
        { id: 0, text: "Die Hard", isCorrect: true },
        { id: 1, text: "Terminator", isCorrect: false },
        { id: 2, text: "Winnie the Pooh", isCorrect: false },
        { id: 3, text: "Tomb Raider", isCorrect: false },
      ],
    },
    {
      text: "Where have you heard this quote: 'The eagles are coming!'?",
      options: [
        { id: 0, text: "Birdemic", isCorrect: false },
        { id: 1, text: "Harry Potter 3 - Prisoner of Azkaban", isCorrect: false },
        { id: 2, text: "Star Wars I - The Phantom Menace", isCorrect: false },
        { id: 3, text: "Lord of the Rings 3 - The return of the King", isCorrect: true },
      ],
    },
    {
      text: "Where have you heard this: 'War, what is it good for?'?",
      options: [
        { id: 0, text: "Star Wars", isCorrect: false },
        { id: 1, text: "War and Peace", isCorrect: false },
        { id: 2, text: "Seinfeld", isCorrect: true },
        { id: 3, text: "All of the above", isCorrect: false },
      ],
    },
    {
      text: "Where have you heard this: 'I'm just a girl, standing in front of a boy, asking him to love her.'?",
      options: [
        { id: 0, text: "Clockwork Orange", isCorrect: false },
        { id: 1, text: "When Harry Met Sally", isCorrect: false },
        { id: 2, text: "Notting Hill", isCorrect: true },
        { id: 3, text: "Interstellar", isCorrect: false },
      ],
    },
    {
      text: "Where have you heard this: 'What does Marcellus Wallace look like???'?",
      options: [
        { id: 0, text: "Django Unchained", isCorrect: false },
        { id: 1, text: "Pulp Fiction", isCorrect: true },
        { id: 2, text: "The Shining", isCorrect: false },
        { id: 3, text: "Huckleberry Finn", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  // DONT TOUCH
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 10);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Movie Quotes Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score/10} out of {questions.length} correct - (
            {(score / questions.length) * 10}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;