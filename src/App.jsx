import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditBooks from "./pages/EditBooks";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";
import ReturnBook from "./pages/ReturnBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<EditBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/return-book" element={<ReturnBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
