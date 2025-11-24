import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import BreadCrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <BreadCrumbs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
