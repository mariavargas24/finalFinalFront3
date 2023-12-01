export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {...state, list: action.payload}
        case 'ADD_FAV': 
            return {...state, favs: [...state.favs, action.payload]} //INCOMPLETO
        case 'CHANGE_THEME':
            return { ...state, darkMode: !state.darkMode }; //INCOMPLETO
        case 'GET_CHARACTER':
            return {} //INCOMPLETO OPCIONAL
        case 'DELETE_FAV': 
            return {} //INCOMPLETO OPCIONAL
    }
}