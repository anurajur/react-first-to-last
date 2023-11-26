import React from "react";
import ReactDom from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Nameste React
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">React functional component</h1>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);