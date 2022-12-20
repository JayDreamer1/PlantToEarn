import React from 'react'
import './marketplace.css'
import pokemonST from '../../assets/Pokemon1.png'
import pokemonND from '../../assets/Pokemon2.png'
import pokemonRD from '../../assets/Pokemon3.png'

const marketplace = () => {
  return (
    <div className='pte_marketplace section_padding'>
      <div className='pte_marketplace-content'>
          <h1>Marketplace</h1>
          <div class="row">
            <div className='column'>
              <img src={pokemonST} alt="Pokemon"/>
              <p>Snorlax</p>
              <p>Type: Normal</p>
              <p>Price: $45.01</p>
            </div>  
            <div className='column'>
              <img src={pokemonND} alt="Pokemon"/>
              <p>Pikachu</p>
              <p>Type: Lightning</p>
              <p>Price: $59.87</p>
            </div> 
            <div className='column'>
              <img src={pokemonRD} alt="Pokemon"/>
              <p>Totodile</p>
              <p>Type: Water</p>
              <p>Price: $38.4</p>
            </div> 
          </div>
          <div className='pte_marketplace-seemore'>
            <button>See More</button>
          </div>
      </div>
    </div>
  )
}

export default marketplace