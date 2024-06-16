import { useDispatch, useSelector } from "react-redux"
import ItemDetails from "./itemDetails"
import { clearCart } from "../utilities/cartSlice"

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    const dispatchClearCart = useDispatch()


    return (
        <div className="w-7/12 mx-auto text-center" >
            <h1 className="font-bold" >Cart</h1>
            {cartItems.length ? <button className="text-white bg-black px-4 py-2" onClick={()=>{dispatchClearCart(clearCart())}} >Clear</button>:''}
            {cartItems.length? cartItems.map(_=> <ItemDetails key={_.id+'cart'} itemInfo={_} />) : <h2 className="font-bold text-gray-400" >No items, Please add items </h2> } 
        </div>
    )

}

export default Cart