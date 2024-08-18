import { useState } from 'react';

//--------------MAIN--------------

export default function MyApp() {
  return (
    <div>
      <SomeText />
      <Form />
      <MyButton />
      <MyButton />
    </div>
  );
}

//--------------FUNCTIONS--------------

var element = {
  name: 'aluminum',
  atomic: '1'
};

function SomeText() {
  return (
    <div className="App">
      <h1>Welcome to Guess That Element!</h1>
      <p>Hint 1: The name of this element is <strong>{element.name.length}</strong> characters long (including spaces).</p>
    </div>
  );
};

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};

function Form() {
  const [guess, setGuess] = useState('');
  // ...
  return (
    <>
    <label>
    Guess: <input 
      value={guess} 
      onChange={e => setGuess(e.target.value)} 
    />
    </label>
    {guess !== '' && 
      <p>Your guess is "{guess.toLowerCase()}".</p>
    }
    </>
  );
}
