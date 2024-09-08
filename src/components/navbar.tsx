import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const NavBar =()=> {
    console.log(`Navbar rendered`);

    

    return (

        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    );
}