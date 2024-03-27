import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-[92%] md:max-w-[82%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}

export default Root;