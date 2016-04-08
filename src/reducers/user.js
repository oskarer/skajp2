import Immutable from 'immutable'
const initialState = Immutable.fromJS({
  loggedIn: false
})
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state.set('loggedIn', true);
    default:
      return state
  }
}

export default user
