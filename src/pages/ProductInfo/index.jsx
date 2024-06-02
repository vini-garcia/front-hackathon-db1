import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ConteinerDiv } from "./style";
import { Header } from "../../components/Header";

export const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <p>Buscando produto</p>;
  }

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <>
      <Header />

      <main>
        <ConteinerDiv>
          <img src={product.img} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.inStock}</p>
          <p>{product.price}</p>
        </ConteinerDiv>
      </main>
    </>
  );
};
