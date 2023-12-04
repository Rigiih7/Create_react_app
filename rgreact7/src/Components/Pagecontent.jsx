import PreviousMap from "postcss/lib/previous-map";
import React from "react";
function Pagecontent(Props) {
  return (
    <div className="pagecontent p-4">
      <h1>{Props.kichwa}</h1>
      <p>
        I am honoured to have been part of the program. It has helped me to
        understand Javascript and React Js. on a granular level.
        <h2>{Props.name}</h2>
      </p>
      
    </div>
  );
}
export default Pagecontent;
