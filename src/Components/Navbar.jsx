import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'


const Navbar = () => {

  const {state, changeTheme} = useCharStates()

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <div className={`navbar ${state.darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Link to='/'><img className='logo' src="./images/diente.png" alt='DH-logo' /></Link>

      <Link to='/'><h4>Home</h4></Link>
      <Link to='/contact'><h4>Contact</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      <button onClick={handleThemeChange}>🌚</button>
    </div>
  )
}

export default Navbar