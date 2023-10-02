import React from 'react';
import './Modal.css';

const Modal = (props: any) => {

    if(!props.show) {
        return null
    }
    const fetchToken = {
        role: "host",
        room_id: "651ccb34cb39d57e8a5d245d",
        room_name: "FRONTEND"
      };

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={props.onClose} className="button">Close</button>
                    <h5 className="modal-title">Invite People to join meeting {fetchToken.room_name}</h5>
                </div>
                <div className="modal-body">
                    <input className="modal-input" placeholder="Choose from the list or type to filter" />
                </div>
                <div className="modal-footer">
                    <button className="button">Copy invite link</button>
                    <div className="btn-right">
                        <h5>Meeting Passcode: {fetchToken.room_id} </h5>
                        <button className="button">Invite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;