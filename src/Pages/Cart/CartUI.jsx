import { Layout } from '../../Components/Layout'
import { ProductsView } from "../../Components/ProductsView";
import { ProductCard } from '../../Components/ProductCard';

function CartUI({items,totalPrice}){
    return (
        <Layout>
            <ProductsView>
                {items.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)}
            </ProductsView>
            <div className=''>Precio Total: {totalPrice}</div>
        </Layout>
    )
}

export {CartUI}