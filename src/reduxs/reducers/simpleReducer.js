const initial_state = {
  list: []
}
export default (state = initial_state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'SIMPLE_ACTION':
      let obj = {
        list: action.payload
      }
      return obj
    default:
      return state
  }
}