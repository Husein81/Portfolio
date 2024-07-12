import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ProjectPage from "../../components/Projects/ProjectPage";

const routes: RouteObject[] = [
    {
        path:'',
        element:<App/>,
        children:[
            {path:'projects', element:<ProjectPage/>}
            
        ]
    }
];

export const router = createBrowserRouter(routes);