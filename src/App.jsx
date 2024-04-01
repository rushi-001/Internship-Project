import "./App.css";
import { NotificationNav } from "./components/NotificationNav";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <>
      <div id="notification-section">
        <NotificationNav />
      </div>
      <div id="navbar-section">
        <Navbar />
      </div>
    </>
  );
}

export default App;
