import React from 'react';
import { useState , useEffect} from 'react';

function App() {
  const [quotes, setQuote] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7155/api/MovieQuotes/6')
    .then(res => res.json())
    .then(data => setQuote(data))

    // const 
  }, []);
console.log(quotes);

//
  
  return (
    <div className="App">
      <div>{quotes.quote}</div>
      <div>{quotes.answer1}</div>
      <div>{quotes.answer2}</div>
      <div>{quotes.answer3}</div>
    </div>
  );
}
// useEffect(() => {
//         effect
//         return () => {
//             cleanup
//         }
//     }, [input])

export default App;