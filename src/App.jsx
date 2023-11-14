import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import LocationLiast from "./components/LocationLiast/LocationLiast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <LocationLiast />
    </>
  );
}

export default App;
