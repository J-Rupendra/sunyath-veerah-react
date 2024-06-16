import { useDispatch } from "react-redux"
import { APP_CDN } from "../utilities/constants"
import { addItem } from "../utilities/cartSlice";

const ItemDetails = ({itemInfo}) => {
    const dispatchAddItemIntoCart = useDispatch()
    console.log("updated in item etails")
    function addItemToCart(){
        dispatchAddItemIntoCart(addItem(itemInfo))
    }
    return (
        <div className="flex border-black border-b-2 py-4" >
            <div className="text-left w-9/12" >
                <span>{itemInfo.name}</span>
                <div>{(itemInfo.price || itemInfo.defaultPrice)/100}</div>
                <p>{itemInfo.description}</p>
            </div>
            <div className="w-2/12" >
            <img className="size-32" src={APP_CDN+itemInfo.imageId} />
            <button className="text-white bg-black w-12 h-8" onClick={addItemToCart} >Add +</button>
            </div>
        </div>
    )
}

export default ItemDetails