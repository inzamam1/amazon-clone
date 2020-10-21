export const initialState = {
  basket: [
    {
      id: "123",
      title: "The Fault in our Stars",
      price: 11,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41dr+Ay2zjL._SX326_BO1,204,203,200_.jpg",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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
      //to removeitems first clone the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //if item exist then remove
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product(id:${action.id})as its not in basket "
        );
      }
      return { ...state, basket: newBasket };
    //removing items

    default:
      return state;
  }
}

export default reducer;
