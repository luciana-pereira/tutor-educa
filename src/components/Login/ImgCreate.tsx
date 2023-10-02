import Img from '../../assets/estudantes.jpg';
import "./Login.css";

const ImgCreate = () => {
    return (
        <div className="img-login-container">
            <div className="img-container-create">
                <img src={Img} alt="Menino digitando no notebook" className="img-content" />
            </div>
        </div>
    );
}
export default ImgCreate;