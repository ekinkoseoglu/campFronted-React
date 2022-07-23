import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

export function ConfigureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
