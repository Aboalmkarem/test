import './footer.css'
import { FaBeer, FaFacebook, FaLanguage, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { BiAbacus } from "react-icons/bi";

function Footer() {
    return(
        <div className='container bg-dark'>
            <div className='row'>
                {/* colum يعني خانة جديدة */}
                <div className='col'>
                <h4 className='text-warning'>Company Name</h4>
                <p>in this section we interduce our company info in datails so you can contact</p>
                </div>
                <div className='col'>
                    <h4 className='text-warning'>Our Serves</h4>
                    <ul>
                        <li>marketing</li>
                        <li>programming</li>
                        <li>content</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='text-warning'>language</h4>
                    <div className='dropdown'><FaPhoneAlt/> arabic</div>
                    <div className='dropdown'><BiAbacus/> arabic</div>
                </div>
            </div>
        </div>  
    )
}

export default Footer