import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
      return response?.data;
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            data={products}
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
          />
        }
      />
      <Route
        path="cart"
        element={<Cart />}
      />
    </Routes>
  );
}

export default App;
