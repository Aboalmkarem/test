// لربط الملفات import
import './navbar.css'
import { FaHome, FaUser } from "react-icons/fa";

// المحتوي بيبقي عبارة عن function
function Navbar () {
    return(
        <div className="Nav container bg-dark text-white">
            <div className='row'>
            <h1 className='col'>Page Name</h1>
            <ul className='ul d-flex col'>
                <li><a href='#' className='text-light col'><FaHome></FaHome> Home</a></li>
                <li><a href='#' className='text-light col'>Serves</a></li>
                <li><a href='#' className='text-light col'>Contact</a></li>
                <li><a href='#' className='text-light col'><FaUser></FaUser> Sign up</a></li>
            </ul>
            </div>
        </div>

    )
}

export default Navbar;