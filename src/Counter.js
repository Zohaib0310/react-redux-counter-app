import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrementHandler = useCallback(() => {
    if (count > 0) {
      dispatch(decrement());
    }
  }, [dispatch, count]);

  return (
    <div style={{ background: "grey" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
