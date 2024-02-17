import "./App.css";
import Family from "./contexts/Family";

function App() {
  const familySecret = {
    familyName: "Badsha",
    onlyParentCanSee: () => {
      return "The Badsha is best forever...";
    },
    onlyGrandChildrenShouldKnow: () => {
      return "The Badsha is always best forever...";
    },
  };
  return (
    <>
      <Family secret={familySecret} />
    </>
  );
}

export default App;
