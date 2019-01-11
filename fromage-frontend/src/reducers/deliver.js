const defaultState = {
  workshops: []
}

const deliverReducer = (state = defaultState, action) => {
  console.log(state)
  switch (action.type) {
    case 'DELIVER_ALLWS':
      return Object.assign({}, state, { workshops: action.payload });
    default:
      return state;
  }
}

export default deliverReducer;