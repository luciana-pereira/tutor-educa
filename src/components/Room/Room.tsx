import React from "react";
import VideoTile from "../VideoTile";
// import './view.css';
import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/react-sdk";
import ControlBar from "../ControlBar/ControlBar";

const Room = () => {

  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);

  return (
    <div className="main"> 
      <div className="main__left">
        <div className="main__videos">
          <div id="video-grid">
            <div className="flex flex-col mt-20">
              <div className="flex bg-gray-900 w-screen min-h-screen p-2 flex-wrap">
                {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
                {peers &&
                  peers
                    .filter((peer) => !peer.isLocal)
                    .map((peer) => {
                      return (
                        <>
                          <VideoTile isLocal={false} peer={peer} />
                        </>
                      );
                    })}
              </div>
            </div> 
          </div>
        </div>
        <ControlBar />
      </div>
      <div className="main__right">
          <div className="main__header">
              <h6>Chat</h6>
          </div>
          <div className="main__chat_window">
              <ul className="messages">

              </ul>
          </div>
          <div className="main__message_container">
              <input id="chat_message" type="text" placeholder="Type message here..." />
          </div>
      </div>
    </div>
  );
};

export default Room;