/*
 * src/store.js
 * With initialState
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   compose(
    applyMiddleware(thunk),
    composeWithDevTools()
  ) );
}

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );
// export default function configureStore() {
//   return createStore(rootReducer, enhancer);
// }
