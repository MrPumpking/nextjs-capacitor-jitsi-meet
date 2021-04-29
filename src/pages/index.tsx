import {NextPage} from "next";

import {Capacitor, Plugins} from '@capacitor/core';
import 'capacitor-jitsi-meet';
import {useState} from "react";

const Home: NextPage = () => {
  const [joinStatus, setJoinStatus] = useState('Waiting')

  const joinConference = async () => {
    const { Jitsi } = Plugins;

    const result: any = await Jitsi.joinConference({
      roomName: 'CapacitorJitsiMeetV2',
      url: 'https://meet.jit.si',
      displayName: 'user1'
    });

    setJoinStatus(result.success)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <span>Capacitor v2</span>
      <span><b>Current platform:</b> {Capacitor.getPlatform()}</span>
      <button onClick={joinConference}>Join Conference</button>
    </div>
  )
}

export default Home
