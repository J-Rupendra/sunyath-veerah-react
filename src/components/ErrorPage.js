import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const errorObj = useRouteError()

    return(
    <div>
        <h1>This is error page</h1>
        <h5>{errorObj.status}</h5>
    </div>
    )
}
    

export default ErrorPage