import LoadingScreen from "../modules/LoadingScreen";

function Dashboard(props) {
 
   if(!props.checksData.checks){
    console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }
  

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
        
    <div> <h1>DASHBOARD</h1>

      {props.checksData.checks.map((server)=>(
       <div className="server">
         <h1 className="server-name">{server.name}</h1>
        <h2 className="server-hostname">host: {server.hostname}</h2>
        <h2 className="server-status">status: {server.status}</h2>
        <h2 className="server-type">type: {server.type}</h2>
        <h2 className="server-lastresponsetime">res/time: {server.lastresponsetime}</h2>
        <h2 className="server-resolution">resolution: {server.resolution}</h2>
       </div>
       ))  } 
    </div>
  )
    }
    
    export default Dashboard;
    