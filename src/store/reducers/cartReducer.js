import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { CartItems } from "../initialValues/CartItems";

const initialState = {
  cartItems: CartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find(
        (c) => c.product.productId === payload.productId
      );
      if (product) {
        product.quantity++;
        return {
          ...state, // keep the old state, just update the quantity
        };
      } else {
        return {
          cartItems: [...state.cartItems, { quantity: 1, product: payload }], // Eski state'in cartItems arrayı ile yeni payloaddan gelen productıda ekleyerek yeni state referansı olusturuyoruz oluşturuyoruz.
        };
      }

    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (c) => c.product.productId !== payload.productId
        ),
      };

    default:
      return state;
  }
}
