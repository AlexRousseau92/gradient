import React from 'react';

const Colors = () => (
  <div>
    <div className="buttons group">
      <button type="button" className="button" id="randFirst">Random First</button>
      <button type="button" className="button" id="randAll">Random All</button>
      <button type="button" className="button" id="randLast">Random Last</button>
    </div>

    <div id="colors" />
  </div>
);

export default Colors;
