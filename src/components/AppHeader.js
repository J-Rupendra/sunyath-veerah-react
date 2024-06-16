import { APP_LOGO } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utilities/UserContext";

const AppHeader = () => {

  const onlineStatus = useOnlineStatus()
  const {showAnywhere} = useContext(UserContext)

  return (
    <div className="header bg-gray-300 my-4 shadow-lg flex justify-between">
      <Link to={"/"} >
      <img
        className="app-logo w-12 my-2"
        src={APP_LOGO}
      /></Link>
      <ul className="nav-items flex items-center" >
        <li className="px-4">{showAnywhere}</li>
        <li className="px-4 mx-3 hover:shadow-xl">{'Online Status : '+(onlineStatus?'✔':'🧧')}</li>
        <li className="px-4 mx-3"> <Link to="/" > Home</Link> </li>
        <li className="px-4 mx-3"> <Link to="/about" > About</Link> </li>
        <li className="px-4 mx-3"> <Link to="/contact" > Contact</Link> </li>
        <li className="px-4 mx-3"> <Link to="/cart" > Cart</Link> </li>
      </ul>
    </div>
  )
}

  export default AppHeader