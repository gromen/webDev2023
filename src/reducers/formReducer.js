export const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  message: '',
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return { ...state, firstName: action.payload };
    case 'SET_LASTNAME':
      return { ...state, lastName: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
