import "./App.css";
import { NotificationNav } from "./components/NotificationNav";
import { Navbar } from "./components/Navbar";
import { MainContainer } from "./components/MainContainer";
import { Footer } from "./components/Footer";

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
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
