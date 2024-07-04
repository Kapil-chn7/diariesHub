import logo from "./logo.svg";
import "./App.css";
import UserAuthPage from "../src/pages/UserAuthPage.js";
import TestingNotebook from "./components/diaryTexture/normalNotebook/TestingNotebook.js";
function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      {/* <UserAuthPage /> */}

      <TestingNotebook />
    </div>
  );
}

export default App;
