import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'


const Detail = () => {
  const {state} = useCharStates()
  const [user, setUser] = useState({})
  const { id } = useParams()
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  useEffect(() => {
    axios(url)
    .then(res => setUser(res.data))
  }, [])

  return (
    <div className={`detail ${state.darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h3>{user.name}</h3>
      <h5>{user.email}</h5>
      <h5>{user.phone}</h5>
      <h5>{user.website}</h5>
    </div>
  )
}

export default Detail