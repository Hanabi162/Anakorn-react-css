import facebook from "../assets/icons/facebook.png"
import logo from "../assets/icons/account.png"
import tiktok from "../assets/icons/tiktok.png"
import twitter from "../assets/icons/twitter.png"

const Navbar = () => {
    return(
        <div className = "flex justify-between items-center">
            <img src={logo} alt="logo" width={75} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank"> 
                        <img src={facebook} alt="facebook" width={50} />
                        </a>
                </li>
                <li className="px-2">
                    <a href="https://www.tiktok.com/th-TH/" target="_blank">
                        <img src={tiktok} alt="tiktok" width={50} /> 
                        </a>
                </li>
                <li className="px-2">
                    <a href="https://twitter.com/X" target="_blank"> 
                        <img src={twitter} alt="twitter" width={50} /> 
                        </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar