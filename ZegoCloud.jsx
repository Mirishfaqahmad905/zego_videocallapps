import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoExpressEngine} from 'zego-express-engine-webrtc'
const ZegoCloud = () => {
    const {Id}=useParams();
    const meeting=async(e)=>{
        const appId="1488512882";
        const serverSecret="a07e0a5caed5e62a84f8558d4e96269b";
        const zegoEngine = new ZegoExpressEngine(appId, serverSecret);
        const kitToken = await zegoEngine.generateKitTokenForTest(appId, serverSecret, Id,Date.now(),"Mir Ishfaq Ahmad"); // Token valid for 1 hour
        const zc=ZegoUIKitPrebuilt.create(kitToken);
     zc.joinRoom({
         container:e,
          scenario:{
             mode:ZegoUIKitPrebuilt.OneONoneCall,
          },
           showScreenSharingButton:true,
     })
    }
   
  

  return (
    <div> 
          <div ref={meeting}/>
    </div>
  )
}

export default ZegoCloud