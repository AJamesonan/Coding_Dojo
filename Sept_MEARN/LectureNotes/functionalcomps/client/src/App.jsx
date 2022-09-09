
import flashcardsData from './data/flashcards.json'
import './App.css';
import { useState } from 'react';

const App =() =>{
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const handleFlipCardClick =(e, selectedIdx) =>{
    const updatedCards = flashcards.map((card,i) => {
      if (i === selectedIdx) {
        return{
          ...card,
          flipped: !card.flipped
        }
        // card.flipped = !card.flipped;
      }
      return card;
    })
    setFlashcards(updatedCards)
  }

  return (
    <div className="container">
      <header style={{ textAlign: 'center'}}>
        <h1>Flash Cards</h1>
        <hr />
      </header>
      <main className='flex-row flex-wrap'>
        {flashcards.map((card, i) => {
          const classes = ["card"]
          if(card.flipped){
            classes.push("flipped")
          }
          return(
            <section key={i} className={classes.join(" ")} onClick={ e=> handleFlipCardClick(e, i)}>
              <h3>{card.category}</h3>
              <p className='front'>{card.front}</p>
              <p className='back'>{card.back}</p>
            </section>
          )
        })}
      </main>
    </div>
  );
}

export default App;
