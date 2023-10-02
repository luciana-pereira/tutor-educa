import AppointmentCard from "./AppointmentCard";
import "./style.css";
const Appointment = () => {
  return (
    <div className="content">
      <div className="proximas-aulas-agendadas">
        Proximas aulas agendadas
      </div>
     <AppointmentCard />
    </div>
  );
};

export default Appointment;
