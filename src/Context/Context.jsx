import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../reducers/reducer";


const CharStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    darkMode: false,
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const {list, favs} = state
    console.log(state)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_USERS', payload: res.data}))
    }, [])

    const changeTheme = () => {
        dispatch({ type: 'CHANGE_THEME' });
      };

      useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
      }, [state.favs])

    return (
        <CharStates.Provider value={{changeTheme, list, favs, state, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)