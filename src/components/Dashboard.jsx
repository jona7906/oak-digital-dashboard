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
/* 
 const [dataRes, setRes] = useState([]);
 
const uploadResData = () => props.checksData.checks.map((check)=>(
   PostResData(check.serverName, check.lasttesttime, check.lastresponsetime)
 ))

 uploadResData()
 useEffect(() => { setRes()}, []);
 */
 
 function getDate(serverdata) {
  const findDate = serverdata.created;
  const timestamp = new Date(findDate);  
  let theDate = `${timestamp.getHours()}:${timestamp.getMinutes()} - ${timestamp.getDate()}/${timestamp.getMonth()+1}/${timestamp.getYear()}`;
  return theDate;
}

const settings = {
  sortBy: "response",
  sortDir: "asc",
};

  function selectSort(event) {
    // console.log(event)
    // const sortBy = event.target.dataset.sort;
    // const sortDir = event.target.dataset.sortDirection;
  
    // //   Find old sortBy element, and remove .sortby
    // const oldElement = document.querySelector(`[data-sort='${settings.sortBy}']`);
    // oldElement.classList.remove("sortby");
  
    // //   Indicate active sort
    // event.target.classList.add("sortby");
  
    // // Toggle the direction!
    // if (sortDir === "asc") {
    //   event.target.dataset.sortDirection = "desc";
    // } else {
    //   event.target.dataset.sortDirection = "asc";
    // }
    // console.log(`Sort by: ${sortBy} - ${sortDir}`);
    // setSort(sortBy, sortDir);
  }

  // function setSort(sortBy, sortDir) {
  //   settings.sortBy = sortBy;
  //   settings.sortDir = sortDir;
  // }

    return (
    <div className="dashboard-container"> 
        <div className="server-container">
        <div className="status-headlines">
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="status">Status</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="site">Site</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="host">Host</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="type">Type</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="response">Response Time</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="resolution">Resolution</button>
          <button onClick={selectSort(event)} data-action="sort" data-sort-direction="asc" data-sort="created">Created</button>
        </div>
        {props.checksData.checks.map((server)=>(
        <div className="server">
        <h2 className="server-status">{<StatusIcon status={server.status}/>}</h2>
        <h2 className="server-name">{server.name}</h2>
        <h2 className="server-hostname">{server.hostname}</h2>
        <h2 className="server-type">{server.type}</h2>
        <h2 className="server-lastresponsetime">{server.lastresponsetime} ms</h2>
        <h2 className="server-resolution">{server.resolution}</h2>
        <h2 className="server-resolution">{getDate(server)}</h2>
       </div>
       ))  } 
        </div>

    </div>
  )
    }
    
    export default Dashboard;
    