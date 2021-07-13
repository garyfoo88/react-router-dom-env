import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  const [params1, setParams1] = useState('')
  const [params2, setParams2] = useState('')

  return (
    <div>
      <div>
          <input placeholder="params1" value={params1} onChange={(e) => setParams1(e.target.value)}/>
      </div>
      <div>
          <input placeholder="params2" value={params2} onChange={(e) => setParams2(e.target.value)}/>
      </div>
      <button
        disabled={!params1 || !params2}
        onClick={() => {
          history.push(`/done/${params1}/${params2}`);
        }}
      >
        go to done with params
      </button>
    </div>
  );
}

export default About;
