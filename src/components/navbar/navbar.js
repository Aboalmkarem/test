// لربط الملفات import
import './navbar.css'


// المحتوي بيبقي عبارة عن function
function Navbar () {
    return(
        <div className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </div>
    )
}

export default Navbar;