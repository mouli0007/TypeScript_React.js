import { ChangeEvent, useReducer, useRef } from "react";

import React from "react";

const UseReducer = () => {
  // Default state
  const initialState = {
    count: 0,
    text: "Mouli VJ",
    email: "",
  };

  const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    RESET,
    NEW_INPUT,
    EMAIL,
  }

  type ReducerActions = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
  };

  //  Reducer funciton !
  const reducer = (
    state: typeof initialState,
    action: ReducerActions
  ): typeof initialState => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        return { ...state, count: state.count + 1 };

      case REDUCER_ACTION_TYPE.DECREMENT:
        return { ...state, count: state.count - 1 };

      case REDUCER_ACTION_TYPE.RESET:
        return { ...state, count: (state.count = 0) };

      case REDUCER_ACTION_TYPE.NEW_INPUT:
        return { ...state, text: action.payload ?? "" };

      case REDUCER_ACTION_TYPE.EMAIL:
        return { ...state, email: action.payload ?? "" };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Reducer Functions !
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });

  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  const reset = () => dispatch({ type: REDUCER_ACTION_TYPE.RESET });

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.EMAIL, payload: e.target.value });
  };
  return (
    <div>
      {initialState.count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input type="text" onChange={handleTextInput} />
      <input type="text" onChange={handleEmailInput} />
      <br />
      <br />
      {state.text}
      <br />
      <br />
      {state.email}
    </div>
  );
};

export default UseReducer;
