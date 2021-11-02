import React, {useReducer} from "react";
import Controls from './Controls'
import Light from './Light'
import counterReducer from "./reducers/lightReducer"
import intitialState from "./initialState"
import { createStore } from "redux";
import { Provider } from "react-redux";
import lightReducer from "./reducers/lightReducer";

const store = createStore(lightReducer, intitialState);

function App() {

  console.log(store.getState().activeLight.color);

  return (
    <Provider store={store}>
    <div className="App">
      <Controls />
      <Light />
    </div>
    </Provider>
  );
}

export default App