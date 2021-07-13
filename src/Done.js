import React from "react";
import { useSelector } from "react-redux";

function Done({ match }) {
  const counterStates = useSelector((state) => state.counter);
  //redux state retains between page changes
  return (
    <div>
      {counterStates.counter}
      <div>{match.params.id}</div>
      <div>{match.params.uid}</div>
    </div>
  );
}

export default Done;
