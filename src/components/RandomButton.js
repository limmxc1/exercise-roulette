import React from "react";
import Data from './Data'
import Card from './Card'

export default function Exercise() {
  let Cards = Data.map(item => 
    <Card 
      key={item.id}
      item={item}
    />
  )
  
  const randomCard = Cards[Math.floor(Math.random() * Cards.length)]
  const [chosenCard, setChosenCard] = React.useState(Cards[Math.floor(Math.random() * Cards.length)])
  function handleClick() {
    const randomCardAgain = Cards[Math.floor(Math.random() * Cards.length)]
    setChosenCard(randomCardAgain)
  }
  

return (
  <div className="random-segment">
    <button 
        className="random-button" 
        onClick={handleClick}>
          Roll the roulette!
    </button>
    <div className="chosen-card">{chosenCard}</div>
  </div>
 )
}

