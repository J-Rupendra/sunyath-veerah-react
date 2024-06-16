import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import MenuDetails from "./MenuDetails";

const RestrauntDetails = () => {
  const { restoId } = useParams();
  const [restoDetails, setRestoDetails] = useState(null);
  const [openAccordianIndex, setOpenAccordianIndex] = useState(0)
  let restoName, menuFilteredData
  useEffect(() => {
    fetchMenu();
  }, []);


  if (!restoDetails) {
    return <Shimmer />;
  }


  async function fetchMenu() {
    const rawData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${restoId}`
    );
    const jsonData = await rawData.json();
    setRestoDetails(jsonData?.data);
       console.log(jsonData.data)
  }

  restoName = restoDetails?.cards[0].card.card.text
  menuFilteredData = restoDetails?.cards[4]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards?.filter(_=>_.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  return (
    <div className="my-4 w-7/12 mx-auto text-center">
      <h1 className="font-bold text-2xl">
        {restoDetails?.cards[0]?.card?.card?.text}
      </h1>
      { menuFilteredData.length===0? <h1 className="font-bold text-gray-300 text-2xl m-10" >No items found, please try another restraunt from <a className="text-blue-500 underline" href="/">Home screen</a> </h1> :menuFilteredData.map((ele,ind) => <MenuDetails key={ele.card.card.title} showItems={openAccordianIndex===ind} setShowItemsFromChild={()=>{setOpenAccordianIndex(openAccordianIndex===ind?-1:ind)}} menuData={ele.card.card} /> ) }
    </div>
  );
};

export default RestrauntDetails;
