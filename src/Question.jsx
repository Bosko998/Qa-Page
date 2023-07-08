import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function Question({ title, info }) {
  const [value, setValue] = useState(true);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <article className="single-question">
      <div className="inner-question">
        <h5>{title}</h5>
        <button className="cross-button" onClick={() => setValue(!value)}>
          {value ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      {value || <p>{info}</p>}
    </article>
  );
}

export default Question;
