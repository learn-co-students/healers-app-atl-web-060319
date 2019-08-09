import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer)

console.log(store.getState())

store.dispatch({type:'CHANGE_SEARCH', value: 'fuuuckk'})

console.log(store.getState())

store.dispatch({type: 'ADD_HEALER', value:{name:"susu", description:"wizard coder"}})

console.log(store.getState())

store.dispatch({type: ''})

console.log(store.getState())

export default store; 
