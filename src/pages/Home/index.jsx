import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [sixProducts, setSixProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  const getProductByButton = (value) => {
    let foundProducts = [];
    if (
      value.toLowerCase() === "calçado" ||
      value.toLowerCase() === "camiseta" ||
      value.toLowerCase() === "artigos esportivos"
    ) {
      allProducts.forEach((element) => {
        if (element.category.toLowerCase() == value.toLowerCase()) {
          foundProducts.push(element);
        }
      });
      setActiveProducts(foundProducts);
    } else if (value === "six") {
      getSixProducts(sixProducts);
    } else if (value === "out") {
      allProducts.forEach((element) => {
        if (element.inStock == false) {
          foundProducts.push(element);
        }
        setActiveProducts(foundProducts);
      });
    } else {
      setActiveProducts(allProducts);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await api.get("/products");
      setAllProducts(response.data);
      return response.data;
    } catch (error) {
      console.warn(error);
    }
  };

  const getSixProducts = async (products) => {
    const setList = new Set();
    const allProductsList = products;

    while (setList.size < 6) {
      const indiceAleatorio = Math.floor(Math.random() * allProductsList.length);
      setList.add(allProductsList[indiceAleatorio]);
    }

    const sortedProducts = Array.from(setList).sort((a, b) => a.id - b.id);
    setSixProducts(sortedProducts);
    setActiveProducts(sortedProducts);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      await getSixProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header getProductByButton={getProductByButton} />
      <main>
        <section>
          <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {activeProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </ul>
        </section>
      </main>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>; 2024 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
