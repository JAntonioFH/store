import { useContext } from 'react'
import { Context } from '../../Context'

import {CartUI} from './CartUI'



function Cart(){
    const context = useContext(Context)
    const totalPrice = context.cartProducts.reduce((acumulador,producto)=> acumulador+producto.price,0)
    return (
        <CartUI
        items={context.cartProducts}
        totalPrice = {totalPrice}
        >
        </CartUI>
    )
}

export {Cart}