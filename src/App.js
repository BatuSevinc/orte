import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,CheckOut} from "./pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;