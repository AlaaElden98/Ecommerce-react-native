const initialState = {
  token: '',
  user: null,
};

function authReducer(currentState = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...currentState,
        token: action.payload.token,
      };
    case 'SET_USER':
      return {
        ...currentState,
        user: action.payload.user,
      };
    default:
      return currentState;
  }
}
export default authReducer;
