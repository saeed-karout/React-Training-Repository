import { Outlet } from "react-router-dom";

export default function LayoutPost(){
    return(
        <div>
            <h1 style={{}}>Layout Navbar Post</h1>
            
            <Outlet />

            <h3 style={{ backgroundColor: "lightgray", padding: "10px" }}>Side bar Post</h3>
        </div>
    )
}