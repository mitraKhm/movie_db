import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";


const RouterProvider = () => {
return (
    <BrowserRouter>
    <Switch>
    {routes.map((route ,index) => (                       
                        <Route path={route.path} exact={route.exact} key={index} render ={(e) => <route.component /> }>
                    { (props) => <route.component/>}                
                                    
                     </Route>
                     ))};
    </Switch>
    
    </BrowserRouter>
)

}

export default RouterProvider;