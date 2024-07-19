import { ADD_TO_CART, REMOVE_TO_CART,INCREASE_QTY,DECREASE_QTY,EMPTY_CART } from './Action';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.data;
      return {
        ...state,
        cart: [...state.cart, { ...item, quantity: 1, TotalBill: item.price }],
      };
    case REMOVE_TO_CART:
      const itemId = action.data;
      // const itemToRemove = state.cart.find(i => i.id === itemId);
        return {
          ...state,
          cart: state.cart.filter(i => i.id !== itemId),
        };
      
    case INCREASE_QTY:
      const itemToIncrease = action.data; //item id
      // const existingItem = state.cart.find(i => i.id === itemToIncrease);
      // if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(i => {
            if (i.id === itemToIncrease) {
              const updatedQuantity = i.quantity + 1;
              const price = parseFloat(i.price);
              return {
                ...i,
                quantity: updatedQuantity,
                TotalBill: updatedQuantity * price
              };
            }
            return i;
          }),
      }
      case DECREASE_QTY:
        const itemToDecrease = action.data; //item id
        return {
          ...state,
          cart: state.cart.map(i => {
            if (i.id === itemToDecrease) {
              const updatedQuantity = i.quantity - 1;
              const price = parseFloat(i.price);
              return {
                ...i,
                quantity: updatedQuantity,
                TotalBill: updatedQuantity * price
              };
            }
            return i;
          }),
      }
      case EMPTY_CART:
        return{
          ...state,
          cart:[]
        };
    default:
      return state;
  }
};

export default cartReducer;
