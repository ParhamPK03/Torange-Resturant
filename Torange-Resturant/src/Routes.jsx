import Home from "./pages/Home"
import Order from "./pages/Order";
import Likes from "./pages/Likes";
import Cart from "./pages/Cart";
import Login_Signup from "./Components/Login_Signup";
import About from "./pages/About";
import ShowAll from "./Components/ShowAll";

const Routes = [
    
    {path:'/', element:<Home />},
    {path:'/cart', element:<Cart />},
    {path:'/order', element:<Order />},
    {path:'/likes', element:<Likes />},
    {path:'/login_signup', element:<Login_Signup />},
    {path:'/about', element:<About />},
    {path:'/showall', element:<ShowAll />},
    
    
];

export default Routes;