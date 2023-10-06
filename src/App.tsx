import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import './App.css';
import LoginForm from './components/Login/LoginForm';
import LoginCreate from './components/Login/LoginCreate';
import Cadastro from './pages/Cadastro';
import CadastroUser from './pages/CadastroUser';
import CreateMeeting from './pages/CreateMeeting';
import OneOnOneMeeting from './pages/OneOnOneMeeting';
import VideoConference from './pages/VideoConference';
import MyMeetings from './pages/MyMeetings';
import JoinMeeting from './pages/JoinMeeting';
import Meeting from './pages/Meeting';
import ThemeSelector from './components/ThemeSelector';
import { EuiProvider, EuiThemeColorMode, EuiThemeProvider } from '@elastic/eui';
import { useAppSelector } from './store/hooks';
import { setToasts } from './store/slices/MeetingSlice';
import DashboardMeeting from './pages/DashboardMeeting';

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  const [isInitialEffect, setIsInitialEffect] = useState(true);
  const toasts = useAppSelector((zoom) => zoom.meetings.toasts);

  const removeToast = (removedToast: { id: string }) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removedToast.id)
      )
    );
  };

  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  useEffect(() => {
    const theme = localStorage.getItem("zoom-theme");
    if (theme) {
      setTheme(theme as EuiThemeColorMode);
    } else {
      localStorage.setItem("zoom-theme", "light");
    }
  }, []);

  useEffect(() => {
    if (isInitialEffect) setIsInitialEffect(false);
    else {
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };

  return (
    <div className="App">
        <ThemeSelector>
          {/* <EuiProvider colorMode={theme}>
            <EuiThemeProvider modify={overrides}> */}
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/login/criar" element={<LoginCreate />} />
                <Route path="/dashboard" element={<DashboardMeeting />} />
                <Route path="/cadastro" element={<Cadastro />} />
                {/* <Route path="/configuracoes" element={<Settings />} /> */}
                <Route path="/cadastrouser" element={<CadastroUser />} />
                <Route path="/create" element={<CreateMeeting />} />
                <Route path="/create1on1" element={<OneOnOneMeeting />} />
                <Route path="/videoconference" element={<VideoConference />} />
                <Route path="/mymeetings" element={<MyMeetings />} />
                <Route path="/join/:id" element={<JoinMeeting />} />
                <Route path="/meetings" element={<Meeting />} />
                {/* <Route path="*" element={<Login />} />           */}
              </Routes>
            {/* </EuiThemeProvider>
          </EuiProvider> */}
        </ThemeSelector>
    </div>
  );
}

export default App;
