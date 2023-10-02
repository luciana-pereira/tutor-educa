import Img from '../../assets/giphy.gif';
import "./Login.css";

const ImgLogin = () => {
    return (
        <div className="img-login-container">
            <div className="img-container">
                <img src={Img} alt="Menino digitando no notebook" className="img-content" />
            </div>
        </div>
    );
}
export default ImgLogin;