import "./style.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AppointmentCard = () => {
  return (
    <>
<div className="frame-parent">
        <div className="frame-group">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <div className="frame-group">
          <div className="sidebar-inner">
            <div className="ellipse-div" />
          </div>
          <div className="nome-do-tutor-parent">
            <b className="nome-do-tutor">Nome do tutor</b>
            <div className="s-15h">20/03 ás 15h</div>
          </div>
        </div>

        <div className="frame-container">
          <div className="confirmar-aula-wrapper">
            <button className="confirmar-aula">confirmar-aula</button>
          </div>
          <div className="reagendar-wrapper">
            <button className="confirmar-aula">Reagendar</button>
          </div>
        </div>

        </AccordionSummary>
        <AccordionDetails>
         
          <div className="body-appoint">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
          
        </AccordionDetails>
      </Accordion>
      
 
       
         
         
        </div>
        
  
      </div>
    </>
  );
};

export default AppointmentCard;
