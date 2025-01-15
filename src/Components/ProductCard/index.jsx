import { useState, useContext, useEffect } from "react";
import { Context } from "../../Context";
import { ProductCardUI } from "./ProductCardUI";

function ProductCard({ product }) {
  const context = useContext(Context);
  const isAdded = context.isProductInCart(product.id);

  // Estado local para el producto seleccionado

  const handleClick = (e) => {
    e.stopPropagation(); // Para evitar que se propague el clic al contenedor principal
    if (isAdded) {
      // Resta del carrito
      context.setCount(context.count - 1);
      context.removeFromCart(product.id)
    } else {
      // Agrega al carrito
      context.setCount(context.count + 1);
      context.addToCart(product)
    }
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
      openProductDetail={handleProductDetail}
    />
  );
}

export { ProductCard };
