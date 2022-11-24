import React from "react";
import { render } from "react-dom";
import Demo from "./Demo";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Demo />
  </div>
);

render(<App />, document.getElementById("root"));
