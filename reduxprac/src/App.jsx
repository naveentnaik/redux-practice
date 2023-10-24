import { useState } from "react";
import Cart from "./components/Cart";
import CreateProduct from "./components/CreateProduct";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  const [showmodal,setShowModal] =useState(false)
  return (
    <div>
      <Navbar setShowModal={setShowModal} />
      <div>
        {showmodal&&<CreateProduct setShowModal={setShowModal} />}
        <div className=" bg-red-900 flex w-full p-2 ">
          <Store />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
