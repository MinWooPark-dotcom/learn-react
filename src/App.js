import React, { useState } from "react";
import loadable from "@loadable/component";
const Lazy = loadable(() => import("./Code Spliting/CodeSpliting"), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    Lazy.preload();
  };

  return (
    <div>
      <div onClick={onClick} onMouseOver={onMouseOver}>
        Click Me!
      </div>
      {visible && <Lazy />}
    </div>
  );
};

export default App;
