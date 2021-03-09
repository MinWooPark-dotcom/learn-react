import React from "react";
import { Route } from "react-router-dom";
import Menu from "./Server Side Rendering/Menu";
import BluePage from "./Server Side Rendering/pages/BluePage";
import RedPage from "./Server Side Rendering/pages/RedPage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
