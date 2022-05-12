import LoadingScreen from "../modules/LoadingScreen";
import StatusIcon from "../modules/StatusIcon";
import PostResData from '../modules/PostResData';
import { useState, useEffect, useRef } from 'react';

function Dashboard(props) {
 
   if(!props.checksData.checks){
    // console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }

// console.log(props.checksData.checks)
{/* <PostResData server={check.serverName} timestamp={check.lasttesttime} restime={check.lastresponsetime}/>
 */}

 const [dataRes, setRes] = useState([]);
 
const uploadResData = () => props.checksData.checks.map((check)=>(
   PostResData(check.serverName, check.lasttesttime, check.lastresponsetime)
 ))
 useEffect(() => { uploadResData()}, []);

/*  <PostResData data={props.checks} */

/*  function statusIcon(){
 if(server.status === "up"){
  console.log("IM UP");
 }
} */
  

 /*  const HtmlBody = () => {
    
    return(
    props.checksData.checks.map((server)=>(
      <div className="server">
        <h1>{server.name}</h1>
        <h2>host: {server.hostname}</h2>
        <h2>status: {server.status}</h2>
        <h2>type: {server.type}</h2>
        <h2>res/time: {server.lastresponsetime}</h2>
        <h2>resolution: {server.resolution}</h2>
        
      </div>
      ))  ) ;
   } */

   // for each loop? eventlistener? for hver server name hover funktion: fold ud så host bliver synligt og klikbart
/* function handleClick() {
  console
} */

   return (
        
    <div> 
        {/* <h2>DASHBOARD</h2> */}
        <div className="server-container">
        <div className="status-headlines">
          <h2 className="status">STATUS</h2>
          <h2 className="name">SITE NAME</h2>
          <h2 className="host">HOST</h2>
          <h2 className="type">TYPE</h2>
          <h2 className="response">RESPONSE TIME</h2>
          <h2 className="resolution">RESOLUTION</h2>
          <h2 className="created">CREATED</h2>
        </div>
        {props.checksData.checks.map((server)=>(
        <div className="server">
        <h2 className="server-status">{<StatusIcon status={server.status}/>}</h2>
        <h2 className="server-name">{server.name}</h2>
        <h2 className="server-hostname">{server.hostname}</h2>
        <h2 className="server-type">{server.type}</h2>
        <h2 className="server-lastresponsetime">{server.lastresponsetime} ms</h2>
        <h2 className="server-resolution">{server.resolution}</h2>
        <h2 className="server-resolution">{server.created}</h2>
       </div>
       ))  } 
        </div>

    </div>
  )
    }
    
    export default Dashboard;
    