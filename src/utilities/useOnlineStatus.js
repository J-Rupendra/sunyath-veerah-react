import { useEffect, useState } from "react"


const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(true)

    // As we need to add an event listener online once for any component where this custom hook is used, we have given 
    // empty dependency. but remember if we use this hook in three different places then this will be called three times
    // but these state variables can never be shared between them. it is isolated instance
    useEffect(()=>{

        window.addEventListener('online',()=>{
            setIsOnline(true)
        })
        window.addEventListener('offline',()=>{
            setIsOnline(false)
        },[])
        
        },[])
    //console.log("online status", isOnline);

    // As the state variable is changing, the component which imports this hook will get re-rendered
    return isOnline
}

export default useOnlineStatus