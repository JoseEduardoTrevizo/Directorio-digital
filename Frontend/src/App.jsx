import Routes from "./config/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="layout">
        <Toaster position="top-right" />
        <Routes />
      </div>
    </>
  );
}

export default App;
