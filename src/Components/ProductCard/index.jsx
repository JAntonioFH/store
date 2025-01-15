import { useState, useContext, useEffect } from "react";
import { Context } from "../../Context";
import { ProductCardUI } from "./ProductCardUI";

function ProductCard({ product }) {
  const context = useContext(Context);
  const [isAdded, setIsAdded] = useState(false);

  // Estado local para el producto seleccionado

  const handleClick = () => {
    if (isAdded) {
      // Resta del carrito
      context.setCount(context.count - 1);
    } else {
      // Agrega al carrito
      context.setCount(context.count + 1);
    }
    setIsAdded(!isAdded); // Cambia el estado del botón
  };

  const handleProductDetail = () => {
    context.setSelectedItem(product); // Almacena el producto seleccionado
    context.openProductDetail(product); // Llama al método del contexto para abrir el detalle
  };

  return (
    <ProductCardUI
      isAdded={isAdded}
      product={product}
      handleClick={handleClick}
      openProductDetail={handleProductDetail} // Usa el nuevo manejador
    />
  );
}

export { ProductCard };

  // Ejemplo de uso
// Puedes usar este componente pasando un objeto de producto como prop

/*
<ProductCard
  product={{
    name: "Producto 1",
    description: "Esta es una breve descripción del producto.",
    price: "19.99",
    image: "https://via.placeholder.com/300"
  }}
/>
*/