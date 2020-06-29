const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h4", {}, breed),
  ]);
};
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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
