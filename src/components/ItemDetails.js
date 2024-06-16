import { APP_CDN } from "../utilities/constants"

const ItemDetails = ({itemInfo}) => {
    console.log(itemInfo)
    return (
        <div className="flex border-black border-b-2 py-4" >
            <div className="text-left w-9/12" >
                <span>{itemInfo.name}</span>
                <div>{(itemInfo.price || itemInfo.defaultPrice)/100}</div>
                <p>{itemInfo.description}</p>
            </div>
            <div className="w-2/12" >
            <img className="size-32" src={APP_CDN+itemInfo.imageId} />
            <button className="text-white bg-black w-12 h-8" >Add +</button>
            </div>
        </div>
    )
}

export default ItemDetails