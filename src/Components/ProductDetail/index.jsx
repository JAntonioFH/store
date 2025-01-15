import { useContext } from 'react';
import { Context } from "../../Context";
import { ProductDetailUI } from './ProductDetailUI';
import "./styles.css"

function ProductDetail() {
    const context = useContext(Context);

    // Renderiza el componente solo si isProductDetailOpen es true
    if (!context.isProductDetailOpen) {
        return null; // No renderiza nada si no está abierto
    }

    return (
        <ProductDetailUI 
            product={context.selectedItem} 
            onClose={context.closeProductDetail} 
            isProductDetailOpen={context.isProductDetailOpen}
        />
    );
}

export { ProductDetail };