import paths from "./utils/paths.js";
import MainPage from "../pages/main-page/index";
import ForbiddenPage from "../pages/forbidden/index";
import Not_foundPage from "../pages/not-found/index";
import Search from "../pages/search/index";
import Complete from "../pages/search_movie/index"

const routes =[    
    {
        name:'INDEX',
        path : paths.INDEX,
        component: MainPage,
        exact :true,
        needAuth:false,
    },
    {
        name:'SEARCH',
        path : paths.SEARCH,
       component:Search,
        exact :true,
        needAuth:false,
    },
  
    {
        name:'FORBIDDEN',
        path : paths.FORBIDDEN,
        component:ForbiddenPage,
        exact :true,
        needAuth:false,
    },
    {
        name:'COMPLETE_RES',
        path : paths.COMPLETE_RES,
        component:Complete,
        exact :true,
        needAuth:false,
    },
    {
        name:'NOT_FOUND',
        path : paths.NOT_FOUND,
        component: Not_foundPage,
        exact :true,
        needAuth:false,
    },
  
 
 
];
export default routes;
