import { combineReducers } from 'redux'

    
let num = (state = 5, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

let consoleContents = (state = [], action) => {
  switch (action.type) {
  case 'SET_CONTENTS':
    return action.contents;
    default:
      return state
  }
};


module.exports = combineReducers({num,consoleContents})
