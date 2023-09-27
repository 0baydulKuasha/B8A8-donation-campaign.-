import { Outlet } from "react-router-dom"; 
import Navber from "../Header/Navber/Navber";

const Root = () => {
    return (
        <div className=" container m-auto ">
             <Navber/>
             <Outlet/>
             
        </div>
    );
};

export default Root;