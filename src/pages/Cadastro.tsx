
import "./style.css";
import SchoolIcon from '@mui/icons-material/School';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Img from "../assets/giphy.gif"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserType } from "../store/slices/tutorEducaDataSlice";

const Cadastro = () => {

  const dispatch = useDispatch();

  const definingUserType = (type: string) => {
    dispatch(setUserType(type));
  }

  return (
    <>
      <div className="effectboo"></div>
      <div className="container">
        <div className="content-register">

          <div className="title-page-cadastro">
            <h1>Olá, bem vindo a página de cadastro! </h1>
            <p>Vamos começar por quem você é: </p>
          </div>

          <div className="instance-child">
            <Link to="/login/criar" onClick={() => definingUserType("user")}>
              <div className="icone-cadastro"><SchoolIcon /> </div>
              <b className="card">Sou aluno</b>
              <p>Gostaria de realizar acompanhamento de um tutor. </p>
            </Link>
          </div>

          <div className="instance-child">
            <Link to="/login/criar" onClick={() => definingUserType("tutor")}>
              <div className="icone-cadastro"> <SentimentVerySatisfiedOutlinedIcon /> </div>
              <b className="card">Sou tutor voluntario</b>
              <p>Gostaria de auxiliar no desenvolvimento educacional de crianças, jovens ou adultos. </p>
            </Link>
          </div>

        </div>
        {/* <img className="mask-group-icon" alt="Menino digitando no notebook" src={Img} /> */}
      </div>
    </>

  );
};

export default Cadastro;
