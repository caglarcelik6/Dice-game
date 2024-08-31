// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import diceImage1 from './images/dice1.png'
// import diceImage2 from './images/dice2.png'
// import diceImage3 from './images/dice3.png'
// import diceImage4 from './images/dice4.png'
// import diceImage5 from './images/dice5.png'
// import diceImage6 from './images/dice6.png'
// import './App.css'

// function App() {

//   let diceImages = [diceImage1,diceImage2,diceImage3,diceImage4,diceImage5,diceImage6]

//   const [images, setImages] = useState(diceImages[0])
//   const [images2, setImages2] = useState(diceImages[1])
//   const [result, setResult] = useState()
  

//   const rollDice = () => {
//     let randomNum1 = Math.floor(Math.random() * 6);
//     let randomNum2 = Math.floor(Math.random() * 6);
//     setImages(diceImages[randomNum1]);
//     setImages2(diceImages[randomNum2]);
//     if (randomNum1 > randomNum2){
//       setResult("Player1 win")
//     }else if(randomNum2 > randomNum1){
//       setResult("Player2 win")
//     }else{
//       setResult("Deuce")
//     }
//   }


//   return (
//     <div className='App'>

//       <h1>Dice Game</h1>
//      <div className='dices'>
//      <div className='dice'>
//       <input type="text" placeholder='player1' name="" id="" />
//       <img src={images}  alt="" />
//       </div>
//       <div className='dice'>
//       <input type="text" placeholder='player1' name="" id="" />
//       <img src={images2} alt="" />
//       </div>
//      </div>
//      <h3>{result}</h3>
//       <button onClick={rollDice}>Zar At</button>
      
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import diceImage1 from './images/dice1.png'
import diceImage2 from './images/dice2.png'
import diceImage3 from './images/dice3.png'
import diceImage4 from './images/dice4.png'
import diceImage5 from './images/dice5.png'
import diceImage6 from './images/dice6.png'
import './App.css'

function App() {

  const diceImages = [diceImage1, diceImage2, diceImage3, diceImage4, diceImage5, diceImage6];

  const [image1, setImage1] = useState(diceImages[0]);
  const [image2, setImage2] = useState(diceImages[1]);
  const [result, setResult] = useState('');
  const [player1, setPlayer1] = useState('Player 1');
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    const interval = setInterval(() => {
      setImage1(diceImages[Math.floor(Math.random() * 6)]);
      setImage2(diceImages[Math.floor(Math.random() * 6)]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomNum1 = Math.floor(Math.random() * 6);
      const randomNum2 = Math.floor(Math.random() * 6);
      setImage1(diceImages[randomNum1]);
      setImage2(diceImages[randomNum2]);

      if (randomNum1 > randomNum2) {
        setResult(`${player1} wins!`);
      } else if (randomNum2 > randomNum1) {
        setResult("Player 2 wins!");
      } else {
        setResult("It's a draw!");
      }
      
      setRolling(false);
    }, 3000);
  }

  const handlePlayer1Change = (e) => {
    setPlayer1(e.target.value);
  }

  return (
    <div className='App'>
      <h1>Dice Game</h1>
      <div className='dices'>
        <div className='dice'>
          <input 
            type="text" 
            placeholder={player1} 
            value={player1} 
            onChange={handlePlayer1Change} 
          />
          <img src={image1} alt="Dice 1" />
        </div>
        <div className='dice'>
          <input 
            type="text" 
            placeholder='Player 2' 
            readOnly
          />
          <img src={image2} alt="Dice 2" />
        </div>
      </div>
      <h3>{result}</h3>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  )
}

export default App
