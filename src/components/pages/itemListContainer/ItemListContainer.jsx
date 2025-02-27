import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simulación de llamada asíncrona
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = [
            { id: 1, name: "Perfume A", category: "hombre" },
            { id: 2, name: "Perfume B", category: "mujer" },
            { id: 3, name: "Perfume C", category: "unisex" },
          ];
          resolve(categoryId ? data.filter((p) => p.category === categoryId) : data);
        }, 1000);
      });
    };

    fetchProducts().then((res) => setProducts(res));
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;