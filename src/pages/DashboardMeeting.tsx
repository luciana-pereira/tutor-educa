import React, { useState } from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { initFirebase } from '../services/firebase';
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "../components/Appointment/style.css";
import Appointment from "../components/Appointment/Appointment";
import GroupsIcon from '@mui/icons-material/Groups';
// import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./style.css";

function DashboardMeeting() {
  const [expandedAppointment, setExpandedAppointment] = useState<number | null>(null);
  const [userType, setUserType] = useState<string>('user');
  const [userData, setUserData] = useState<any>('');

  const collapseAppointment = () => {
    setExpandedAppointment(null);
  };

  const app = initFirebase();
  const auth = getAuth(app);
  const db = getFirestore(app);

  const user = auth.currentUser;
  const searchEmail = user?.email;

  const getCollectionData = async () => {
    const querySnapshot = await getDocs(collection(db, userType));
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  };

  setTimeout(() => {
    getCollectionData().then((data) => {
      if (data[0]) {
        if (searchEmail === data[0].email) {
          setUserData(data[0]);
        } else {
          setUserType('doctor');
        }
      } else {
        setUserType('doctor');
      }
    });
  }, 1000);

  useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        <div className="Dashboard">
          <div className="side-menu">
            <Sidebar />
          </div>
          <div className="container">
            <div>
              <Stack className="boxAvatar" direction="row" spacing={2}>
              </Stack>
              {userData ?
                (userData?.type === 'tutor') ? (
                  <p className="nameDashboard">
                    Olá, {(userData?.maleBiologicalGender) ? `Sr.${userData?.name}` : `Sra.${userData?.name}`}
                  </p>
                ) : (
                  <p className="nameDashboard">Olá, {userData?.name}</p>
                )
                : undefined}
              <div className="boxConteiner">
              </div>
            </div>
            {/* <Appointment /> */}
          </div>
        </div>

        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "2vh 20vh" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage src={dashboard1} alt="icon" size="5rem" />}
              title={`Criar reunião`}
              description="Crie uma nova reunião e convide pessoas."
              onClick={() => navigate("/create")}
              paddingSize="m"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage src={dashboard2} alt="icon" size="100%" />}
              title={`Minhas reuniões`}
              description="Veja suas reuniões criadas."
              onClick={() => navigate("/mymeetings")}
              paddingSize="m"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage src={dashboard3} alt="icon" size="5rem" />}
              title={`Encontros`}
              description="Veja as reuniões para as quais você foi convidado."
              onClick={() => navigate("/meetings")}
              paddingSize="m"
            />
          </EuiFlexItem>
          </EuiFlexGroup><br/>


          <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "5vh 20vh" }}
        >
          <EuiFlexItem>
            <EuiCard
              // icon={<EuiImage src={dashboard1} alt="icon" size="5rem" />}
              title={`Atividades`}
              description="Atividades criadas."
              onClick={() => navigate("/dashboard")}
              paddingSize="m"
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              // icon={<EuiImage src={dashboard1} alt="icon" size="5rem" />}
              title={`Dúvidas ?`}
              description="Crie dúvidas para que os tutores parceiros possam te auxilia."
              onClick={() => navigate("/dashboard")}
              paddingSize="m"
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              // icon={<EuiImage src={dashboard1} alt="icon" size="5rem" />}
              title={`Tutor / Parceiro`}
              description="Busque por um parceiro de acordo com sua area de conhecimento."
              onClick={() => navigate("/dashboard")}
              paddingSize="m"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
}

export default DashboardMeeting;
