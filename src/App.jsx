import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LocationList from "./components/LocationLiast/LocationList";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList/>}/>
      </Routes>
    </>
  );
}

export default App;
