import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "somethong-important" }, [
    React.createElement("h1", {}, "Adopt-Me!"),

    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Tuna",
      animal: "cat",
      breed: "Doink",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
