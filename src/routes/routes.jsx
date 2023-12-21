import NavBar from "../Header/NavBar";
import Home from "../componentes/Home";
import { ProductsList } from "../componentes/Productos/ProductsList";




export const routes = 

    
        [
            {
              path: "/",
              element: <NavBar/>,
              children: [ 
                {
                  path:"/",
                  element: <Home/>
                }, {
                  path:"/productos",
                  element: <ProductsList/>
                },
              ],
            },
          ]
    
