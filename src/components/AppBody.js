import RestrauntCard, {RestrauntCardHOC} from "./RestrauntCard"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utilities/useOnlineStatus"
import UserContext from "../utilities/UserContext"

let restrauntList = [] //its better to create a state variable instead of doing like this, as state variable also works in the same way
const AppBody = () => 
    {
      
      const [toggleTopRated, setToggleTopRated] = useState(false)
      const [restrauntsListToShow, setRestrauntsList] = useState([])
      const onlineStatus = useOnlineStatus()
      const {showEverywhere, setUserContextData} = useContext(UserContext)

        

        useEffect(()=>{
            getRestrauntsList()
        },[])

        // we should not keep this return statement before useEffect as it will voiolate the react hook rules which throw error
        // which means it will show error page declared in routes
        if(!onlineStatus){
          return (<div>You have no internet connection. Please check and fix.</div>)
        }

        async function getRestrauntsList(){
          try{
            const resp = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const jsonResp = await resp.json()
            restrauntList = transformResponse(jsonResp)
            //console.log("restaurants list", restrauntList);
            setRestrauntsList(restrauntList);
          }
          catch(err){
            //console.log("unable to fetch restraunts", err);
          }
        }

        function filterTopRated () {
          //console.log("top rated",toggleTopRated);
            if(!toggleTopRated){
                setToggleTopRated(true)
                setRestrauntsList(restrauntList.filter(_=>_.rating>4))
                } else{
                    setToggleTopRated(false)
                    setRestrauntsList(restrauntList)
            }
        }

        function searchRestraunt(enteredName){
            setToggleTopRated(false)
            setRestrauntsList( restrauntList.filter(_=>_.name.includes(enteredName)) )
        }

        function transformResponse(restoResp){
            const cardDetails = restoResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            return cardDetails.map(({ info }) => ({
              name: info.name,
              cuisines: info.cuisines,
              rating: info.avgRating,
              deliveryTime: info.sla.deliveryTime,
              imageUrl: info.cloudinaryImageId,
              id:info.id
            }));
        }

        const HighlyRecommended = RestrauntCardHOC(RestrauntCard)

        return (
          <div className="app-body">
            <div className="search-container flex my-4 items-center" >
            <input className="bg-slate-200 rounded-md p-1 border-orange-500 mr-4" type="text" placeholder="search..." onKeyUp={(event)=>{searchRestraunt(event.target.value)}} />
            <div className="bg-slate-100 rounded-md p-1" >
            <input type="checkbox" id="top-rated-checkbox" name="top-rated-checkbox" onChange={filterTopRated} checked={toggleTopRated} />
            <label htmlFor="top-rated-checkbox" className="mx-2" >Show Top Rated</label>
            </div>
            <input className="mx-4 border border-black" value={showEverywhere} onChange={(e)=>{setUserContextData(e.target.value)}} />
            </div>
            {restrauntsListToShow.length === 0 ? (
              <Shimmer />
            ) : (
                
              <div className="resto-card-container flex flex-wrap gap-3">
                {restrauntsListToShow.map((resto) => (
                  resto.rating>4.2?<Link key={resto.id} to={"/restraunt/"+resto.id} ><HighlyRecommended restrauntDetails={resto} /> </Link> :
                  <Link  key={resto.id} to={"/restraunt/"+resto.id} > <RestrauntCard restrauntDetails={resto} /> </Link>
                ))}
              </div>
            )}
          </div>
        );
    }

export default AppBody