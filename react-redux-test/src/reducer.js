const initialState = {
  likes: 10,
  comments: ['aa', 'bb']
}

function like (state = initialState, action) {
  switch (action.type) {
    case 'NEW_LIKE':
      return {...state, likes: state.likes + 1};
  }

  return state;
}

export default like;
