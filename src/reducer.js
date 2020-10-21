export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //Adding item from Basket

    case "REMOVE_FROM_BASKET":
      return { state };
    //removing items

    default:
      return state;
  }
}

export default reducer;
