import cake from "../assets/image/cake.png"
import {useNavigate} from "react-router-dom";
function LandingPage(){
    const navigate = useNavigate();
    const handleTodetail = () =>{
        navigate("/details");
    };
    return(
        <div className="text-center">
            <p className="font-mono- text-2xl font-bold uppercase">About Me</p>
            <p className="text-md mt-2 font-bold text-white mx8 md:mx-36"></p>
            <p><center><img src={cake} alt="cake" width={150} className></img></center></p>
            <p>Portfolio The work page is under development.</p>
            <button className="text-[#FF4500] underline" onClick={() =>handleTodetail ()}> NEXT </button>
        </div>
    );
}

export default LandingPage;