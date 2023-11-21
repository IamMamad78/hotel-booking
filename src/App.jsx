import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LocationList from "./components/LocationLiast/LocationList";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelProvider from "./context/HotelProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import BookmarkListProvider from "./context/BookmarkListContext";
import Bookmark from "./components/Bookmark/Bookmark";
import SingleBookamrk from "./components/SingleBookmark/SingleBookmark";

function App() {
  return (
    <BookmarkListProvider>
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
            <Route index element={<Bookmark />} />
            <Route path=":id" element={<SingleBookamrk />} />
            <Route path=":add" element={<div>add new bookmark</div>} />
          </Route>
        </Routes>
      </HotelProvider>
    </BookmarkListProvider>
  );
}

export default App;
