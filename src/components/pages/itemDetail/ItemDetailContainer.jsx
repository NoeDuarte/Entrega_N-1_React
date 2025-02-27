import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    // Simulación de llamada asíncrona
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = [
            { id: 1, name: "Perfume A", description: "Descripción del perfume A", price: 50 },
            { id: 2, name: "Perfume B", description: "Descripción del perfume B", price: 60 },
            { id: 3, name: "Perfume C", description: "Descripción del perfume C", price: 70 },
          ];
          resolve(data.find((p) => p.id === parseInt(itemId)));
        }, 1000);
      });
    };

    fetchProduct().then((res) => setProduct(res));
  }, [itemId]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;