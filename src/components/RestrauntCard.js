import { useContext } from "react";
import { APP_CDN } from "../utilities/constants"
import UserContext from "../utilities/UserContext";

const RestrauntCard = ({ restrauntDetails }) => {
  const {showAnywhere} = useContext(UserContext)
  console.log("show everywhere1",showAnywhere)

  return (
    <div className="resto-card w-60 bg-gray-200 p-2 rounded-lg min-h-60 hover:scale-90 transition-transform">
      <img
        className="resto-image w-full h-28 object-cover"
        src={APP_CDN + restrauntDetails?.imageUrl}
      />
      <h3 className="font-bold">{restrauntDetails?.name}</h3>
      <h5 className="resto-cuisine">{restrauntDetails?.cuisines.join(", ")}</h5>
      <h5 className="resto-rating">{restrauntDetails?.rating}</h5>
      <h5 className="resto-rating">{restrauntDetails?.deliveryTime}</h5>
      <h5 className="resto-rating text-red-500">{showAnywhere} abc</h5>
    </div>
  );
};


export const RestrauntCardHOC = (RestrauntCard) => {
    //console.log("im here")
    return (props) => {
        //console.log("im here inside")
      return (
        <div>
          <label className="absolute bg-green-300 rounded-lg px-2" >Recommended</label>
          <RestrauntCard {...props} />
        </div>
      )
    }
  }

export default RestrauntCard