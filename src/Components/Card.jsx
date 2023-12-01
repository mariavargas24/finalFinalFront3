import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Card = ({item}) => {

  const {favs, dispatch} = useCharStates()

  const findFav = favs.find((fav) => fav.id == item.id)

  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div className='card'>
      <Link to={'/detail/' + item.id}>
        <h4>{item.name}</h4>
        <h6>{item.username}</h6>
        <img className='card-img' src="./images/doctor.jpg" alt='DH-logo' />
      </Link>
      <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button>
     
    </div>
  )
}

export default Card