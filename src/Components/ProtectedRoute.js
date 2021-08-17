import { Redirect, Route } from "react-router-dom"
import authentication from "./authentication"

const ProtectedRoute = ({ component: Component , ...rest}) => {
    return (
        <Route {...rest} render ={(props) => {
            if (authentication.isAuthenticated()) 
            {
                //console.log(authentication.isAuthenticated())
                return <Component {...props} />
            }
            else 
            {
                //console.log(authentication.isAuthenticated())
                return <Redirect to={{pathname:'/', state:{from:props.location}}} />

            }
        }} 
        />
    )
}

export default ProtectedRoute;