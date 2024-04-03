import "./App.css";
import { NotificationNav } from "./components/NotificationNav";
import { Navbar } from "./components/Navbar";
import { MainContainer } from "./components/MainContainer";

function App() {

  return (
    <>
      <div id="notification-section">
        <NotificationNav />
      </div>
      <div id="navbar-section">
        <Navbar />
      </div>
      <div id="body">
        <MainContainer />
      </div>
    </>
  );
}

export default App;
