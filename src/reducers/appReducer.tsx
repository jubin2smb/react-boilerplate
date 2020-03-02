import {LOGIN} from '../actions/ActionTypes'


export default function redcuer(state = {}, action:any) {
    switch (action.type) {
      case LOGIN:
        return Object.assign({}, state, {})
      default:
        return state
    }
  }


 