import { ProductCard } from "../../Components/ProductCard";
import { Layout } from "../../Components/Layout";
import { ProductsView } from "../../Components/ProductsView";

function HomeUI({items}) {
    return ( 
        <Layout>
            
            <ProductsView>
                {items.map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)}
            </ProductsView>
        </Layout>
     );
}

export  {HomeUI};