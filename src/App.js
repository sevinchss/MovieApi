
import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss'
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
