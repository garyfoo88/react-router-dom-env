import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { increaseCounter } from "./actions/counterActions";
import { v4 as uuidv4 } from "uuid";

function Shop() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);
  const history = useHistory();
  const [id, setId] = useState("");
  const [uid, setUid] = useState("");

  return (
    <div>
      {counterState.counter}
      <div>
        <button
          onClick={() => {
            dispatch(increaseCounter());
          }}
        >
          +1
        </button>
      </div>
      <div>{id}</div>
      <button onClick={() => setId(uuidv4())}>generate id</button>
      <div>{uid}</div>
      <button onClick={() => setUid(uuidv4())}>generate uid</button>
      <div>
        <button
          disabled={!uid || !id}
          onClick={() => {
            history.push(`/done/${id}/${uid}`);
          }}
        >
          Go to done with history.push
        </button>
      </div>
      <div></div>
      {id && uid && <Link to={`/done/${id}/${uid}`}>Go to done with link</Link>}
      
    </div>
  );
}

export default Shop;
