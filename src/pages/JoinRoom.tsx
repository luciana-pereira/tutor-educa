import React, { useState } from 'react';
import './style.css';
import NavBar from '../components/Dashboard/NavBar/NavBar';

import { useHMSActions} from '@100mslive/react-sdk';
import fetchToken from "../services/fetchToken";

const JoinRoom = () => {
    const hmsActions = useHMSActions();
    const [userName, setUserName] = useState("");

    const handleSubmit = async (userName: any) => {
        const token = await fetchToken(userName);
        hmsActions.join({ 
        userName,
        authToken: token
        });
    };
    return(
        <>
            <NavBar />
            <hr></hr>
            <div id="content_container" style={{minHeight: 872}}  className="zoom-newcontent ">
                <div id="content" className="main-content">
                    <div className="mini-layout" id="join-conf">
                        <div className="mini-layout-body">
                            <h1 style={{fontSize: 25}}>Join Meeting</h1>
                            <div className="box">
                                <form id="join-form" className="form-vertical" onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmit(userName);
                                    }}>
                                    <div className="form-group confno" style={{marginBottom: 30}}>
                                        <div className="controls">
                                            <label htmlFor="join-confno" style={{color: "#747486", fontSize: 15,marginBottom: 10}}>Meeting ID or Personal Link Name</label>
                                            <input aria-describedby="rule-tip" id="join-confno" 
                                                type="text" 
                                                className="form-control input-lg confno" 
                                                autoComplete="off" max="100" 
                                                placeholder="Enter Meeting ID or Personal Link Name" 
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                name="userName"
                                                required
                                                />
                                            <div id="errorContainer" className="wc-new-syle">
                                                <div id="join-errormsg" className="error hideme"><i></i><span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 16}}>
                                        <div className="controls">
                                            By clicking "Join", you agree to our <a href="https://zoom.us/terms">Terms of Services</a> and <a href="https://zoom.us/privacy">Privacy Statement</a>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 72}}>
                                        <div className="controls wc-new-syle">
                                            <button id="btnSubmit" role="button" style={{ width: 200, padding: 5}} className="btn btn-primary user submit">Join</button>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="controls wc-new-syle">
                                            <a id="btnRoomSystemJoin" className="doc" href="https://zoom.us/meeting/rooms">Join a meeting from an H.323/SIP room system</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default JoinRoom;