import LoadingScreen from "../modules/LoadingScreen";
import StatusIcon from "../modules/StatusIcon";
function Dashboard(props) {
 
   if(!props.checksData.checks){
    console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }

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



   return (
        
    <div> <h2>DASHBOARD</h2>
        <div className="server-container">
        {props.checksData.checks.map((server)=>(
       <div className="server">
        <h2 className="server-status">status: {<StatusIcon status={server.status}/>}</h2>
        <h2 className="server-name">{server.name}</h2>
        <h2 className="server-hostname">host: {server.hostname}</h2>
        <h2 className="server-type">type: {server.type}</h2>
        <h2 className="server-lastresponsetime">res/time: {server.lastresponsetime}</h2>
        <h2 className="server-resolution">resolution: {server.resolution}</h2>
       </div>
       ))  } 
        </div>

    </div>
  )
    }
    
    export default Dashboard;
    