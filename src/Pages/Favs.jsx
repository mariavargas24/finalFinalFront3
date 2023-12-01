import React from 'react'
import { useCharStates } from '../Context/Context'
import Card from '../Components/Card'



const Favs = () => {

  const {favs, state} = useCharStates()

  return (
    <div className={`card-grid ${state.darkMode ? 'dark-mode' : 'light-mode'}`}>
          {favs.map(fav => <Card item={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs