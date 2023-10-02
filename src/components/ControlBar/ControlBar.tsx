import React, {useState} from "react";
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsLocalScreenShared,
  selectPeerCount
} from "@100mslive/react-sdk";
import Modal from "../Modal/Modal";

const ControlBar = () => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);
  const countParticipants = useHMSStore(selectPeerCount);

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };
  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };
  const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
  }
//   const participants =  () => {
//     hmsActions.setParticipantsCount(!countParticipants);
//   }
 const invite = () => {
    const inviteElement = document.getElementById("invite");
    if (inviteElement) {
      inviteElement.classList.toggle("show");
    }
  }

//   const handleClick = async () => {
//     const endRoomResult = await hmsActions.endRoom(false, "reason");
//     if (endRoomResult) {
//       hmsActions.leave();
//     }
//   };

const handleClick = () => {
    hmsActions.endRoom(false, "reason");
    hmsActions.leave();
};
  
  
  const [show, setShow] = useState(false);

  return (

    <div className="main__controls">
        <div className="main__controls__block">
            <div className="main__controls__button main__mute_button" onClick={toggleAudio}>
                {isLocalAudioEnabled ? (
                  <>
                    <i className="fas fa-microphone"></i>
                    <span>Mute</span>
                  </>
                  ) : (
                  <>
                    <i className="fas fa-microphone-slash"></i>
                    <span>UnMute</span>
                  </>
                  )}
            </div>
            <div onClick={toggleVideo} className="main__controls__button main__video_button" >
                {isLocalVideoEnabled ? (
                  <>
                    <i className="fas fa-video"></i>
                    <span>Stop Video</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-video"></i>
                    <span>Play Video</span>
                  </>
                )}
            </div>
            <div className="main__controls__button">
                <i className="fas fa-shield-alt"></i>
                <span>Security</span>
            </div>
            <div className="main__controls__button part" onClick={invite}>
              <i className="fas fa-user-friends"></i>
              <span className="partLink">Participants <span className="participants">{countParticipants}</span></span>
                <div id="invite" className="dropdown-content">
                  <button onClick={() => setShow(true)}>Invite  
                    <span className="share-icon">

                    </span>
                  </button>
                </div>
                <Modal onClose={() => setShow(false)} show={show} />
            </div>
            <div className="main__controls__button">
                <i className="fas fa-comment-alt"></i>
                <span>Chat</span>
            </div>
            <div onClick={toggleScreen} className="main__controls__button main__video_button" >
                <i className="fas fa-desktop"></i>
                {isLocalScreenShared ? "Unshare" : "Share Screen"}
            </div>
            <div className="main__controls__button">
                <i className="fas fa-record-vinyl"></i>
                <span>Record </span>
            </div>
            <div className="main__controls__button">
                <i className="fas fa-laugh"></i>
                <span>Reactions</span>
            </div>
            <div className="main__controls__button">
                <i className="fas fa-retweet"></i>
                <span>Apps</span>
            </div>
            <div className="main__controls__button">
                <i className="fas fa-clipboard"></i>
                <span>Whiteboard</span>
            </div>
        </div>
        <div className="main__controls__block">
          <div onClick={handleClick} className="main__controls__button" >
            <span className="leave_meeting">Leave Meeting</span>
          </div>
        </div>
    </div>
  );
};

export default ControlBar;