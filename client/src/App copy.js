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
// }

function App() {
  // fetch the data from the APi with address https://localhost:7155/api/MovieQuotes and store it in the variable quotes
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7155/api/MovieQuotes")
    .then(res => res.json())
    .then(data => setQuotes(data))
  }
  , []);

// store array of objects from the api in 5 different objects with properties quoteId, quote, answer1, answer2, answer3
  // const [quoteId, setQuoteId] = useState(quotes[0].quoteId);
  // const [quote, setQuote] = useState(quotes[0].quote);
  // const [answer1, setAnswer1] = useState(quotes[0].answer1);
  // const [answer2, setAnswer2] = useState(quotes[0].answer2);
  // const [answer3, setAnswer3] = useState(quotes[0].answer3);

console.log(quotes);

  return (
    <>
    <div className="App">
      <h1>Movie Quotes</h1>
      <div>{answer1}</div>
    </div>
    </>
  );
}


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

  // // Properties
  // const [showResults, setShowResults] = useState(false);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);

  // const questions = [
  //   {
  //     text: "What is the capital of America?",
  //     options: [
  //       { id: 0, text: "New York City", isCorrect: false },
  //       { id: 1, text: "Boston", isCorrect: false },
  //       { id: 2, text: "Santa Fe", isCorrect: false },
  //       { id: 3, text: "Washington DC", isCorrect: true },
  //     ],
  //   },
  //   {
  //     text: "What year was the Constitution of America written?",
  //     options: [
  //       { id: 0, text: "1787", isCorrect: true },
  //       { id: 1, text: "1776", isCorrect: false },
  //       { id: 2, text: "1774", isCorrect: false },
  //       { id: 3, text: "1826", isCorrect: false },
  //     ],
  //   },
  //   {
  //     text: "Who was the second president of the US?",
  //     options: [
  //       { id: 0, text: "John Adams", isCorrect: true },
  //       { id: 1, text: "Paul Revere", isCorrect: false },
  //       { id: 2, text: "Thomas Jefferson", isCorrect: false },
  //       { id: 3, text: "Benjamin Franklin", isCorrect: false },
  //     ],
  //   },
  //   {
  //     text: "What is the largest state in the US?",
  //     options: [
  //       { id: 0, text: "California", isCorrect: false },
  //       { id: 1, text: "Alaska", isCorrect: true },
  //       { id: 2, text: "Texas", isCorrect: false },
  //       { id: 3, text: "Montana", isCorrect: false },
  //     ],
  //   },
  //   {
  //     text: "Which of the following countries DO NOT border the US?",
  //     options: [
  //       { id: 0, text: "Canada", isCorrect: false },
  //       { id: 1, text: "Russia", isCorrect: true },
  //       { id: 2, text: "Cuba", isCorrect: true },
  //       { id: 3, text: "Mexico", isCorrect: false },
  //     ],
  //   },
  // ];

  // // Helper Functions

  // /* A possible answer was clicked */
  // const optionClicked = (isCorrect) => {
  //   // Increment the score
  //   if (isCorrect) {
  //     setScore(score + 10);
  //   }

  //   if (currentQuestion + 1 < questions.length) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   } else {
  //     setShowResults(true);
  //   }
  // };

  // /* Resets the game back to default */
  // const restartGame = () => {
  //   setScore(0);
  //   setCurrentQuestion(0);
  //   setShowResults(false);
  // };

  // return (
  //   <div className="App">
  //     {/* 1. Header  */}
  //     <h1>Movie Quotes Quiz</h1>

  //     {/* 2. Current Score  */}
  //     <h2>Score: {score}</h2>

  //     {/* 3. Show results or show the question game  */}
  //     {showResults ? (
  //       /* 4. Final Results */
  //       <div className="final-results">
  //         <h1>Final Results</h1>
  //         <h2>
  //           {score/10} out of {questions.length} correct - (
  //           {(score / questions.length) * 10}%)
  //         </h2>
  //         <button onClick={() => restartGame()}>Restart game</button>
  //       </div>
  //     ) : (
  //       /* 5. Question Card  */
  //       <div className="question-card">
  //         {/* Current Question  */}
  //         <h2>
  //           Question: {currentQuestion + 1} out of {questions.length}
  //         </h2>
  //         <h3 className="question-text">{questions[currentQuestion].text}</h3>

  //         {/* List of possible answers  */}
  //         <ul>
  //           {questions[currentQuestion].options.map((option) => {
  //             return (
  //               <li
  //                 key={option.id}
  //                 onClick={() => optionClicked(option.isCorrect)}
  //               >
  //                 {option.text}
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     )}
  //   </div>
  // );
  

export default App;