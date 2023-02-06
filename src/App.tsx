import './App.css';
import { Routes, Route } from "react-router-dom"
import Checkout from "./pages/checkout"
import "./index.css";

function App() {
  return (
    <>

      <div className="App">
        <Routes>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App