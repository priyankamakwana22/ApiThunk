const initialState = {
  data: [],
};
const ApiReducer = (state = initialState, action) => {
  console.log('🚀 ~ ApiReducer ~ action:', action);
  console.log('🚀 ~ ApiReducer ~ state:', state);
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ApiReducer;
