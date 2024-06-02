import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductInfo } from "../pages/ProductInfo";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/products/:id`} element={<ProductInfo />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};
