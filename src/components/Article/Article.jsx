import React from 'react'
import './article.css'
import pokemon from '../../assets/leafpokemon.png'

const article = () => {
  return (
    <div className='pte_article section_padding' id='home'>
      <div className='pte_article-content'>
        <div className='col-1-2'>
        <h1>Farm and earn coins by playing Plant to Earn NFT game</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='col-1-2 clearfix'> 
        <div className='pte_article-bgicon'>
          <img src={pokemon} alt='pokemon'/>  
        </div>
        </div>
      </div>
    </div>
  )
}

export default article