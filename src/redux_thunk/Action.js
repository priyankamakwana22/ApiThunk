export const GET_DATA = 'GET_DATA';

export const getDataMethod = data => ({
  type: GET_DATA,
  payload: data,
});

export const getDataAsync = () => async dispatch => {
  let url = 'https://fakestoreapi.com/products';
  let result = await fetch(url);
  result = await result.json();
  dispatch(getDataMethod(result));
};
