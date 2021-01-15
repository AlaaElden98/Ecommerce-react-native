const initialState = {
  token: '',
  user: null,
};

function authReducer(prevState = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...prevState,
        token: action.payload.token,
      };
    case 'SET_USER':
      return {
        ...prevState,
        user: action.payload.user,
      };
    default:
      return prevState;
  }
}
export default authReducer;
