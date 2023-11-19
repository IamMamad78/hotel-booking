import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LocationList from "./components/LocationLiast/LocationList";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelProvider from "./context/HotelProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import Bookmark from "./components/BookmarkLayout/BookmarkLayout";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";

function App() {
  return (
    <HotelProvider>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
        <Route path="/hotels" element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<SingleHotel />} />
        </Route>
        <Route path="/bookmark" element={<BookmarkLayout />}>
          <Route index element={<div>bookmark list</div>} />
          <Route path=":add" element={<div>add new bookmark</div>} />
        </Route>
      </Routes>
    </HotelProvider>
  );
}

export default App;
