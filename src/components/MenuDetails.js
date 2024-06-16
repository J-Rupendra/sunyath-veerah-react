import { useState } from "react";
import ItemDetails from "./itemDetails";

const MenuDetails = ({menuData, showItems, setShowItemsFromChild}) => {

    // //console.log("menu data with categories",menuData);
    // const [showItems, setShowItems] = useState(false)

    return (
        <div className=" bg-gray-200 mb-4 px-4 py-2 rounded-md shadow-lg hover:translate-y-1 transition-all" >
            <div className="flex justify-between cursor-pointer" onClick={setShowItemsFromChild} >
            <span className=" font-semibold" >{menuData.title} ({menuData.itemCards.length}) </span>
            <span>v</span>
            </div>
            { showItems && menuData.itemCards.map(_=> <ItemDetails key={_.card.info.id} itemInfo={_.card.info} /> ) }


        </div>
    )
}

export default MenuDetails