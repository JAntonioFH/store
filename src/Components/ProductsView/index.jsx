
import { ProductDetail } from "../../Components/ProductDetail";



function ProductsView({children}) {

    return ( 
        <>
            <ProductDetail></ProductDetail>
            <div className="grid gap-4 grid-cols-4 w-full">
                {children}
            </div>
        </>

     );
}

export  {ProductsView};