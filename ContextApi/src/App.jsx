import "./App.css";
import Family from "./components/Family";
import { FamilyContext } from "./contexts/FamilyContext";

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
      <FamilyContext.Provider value={familySecret}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
