import LoadingScreen from "../modules/LoadingScreen";
import StatusIcon from "../modules/StatusIcon";
import PostResData from '../modules/PostResData';

///REACT GRID
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { Grid } from '@ag-grid-community/core';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

function Dashboard(props) {
 
   if(!props.checksData){
     console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }
 const gridRef = useRef();

 const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
 
 useEffect(() => {
setRowData(props.checksData)
}, [props]);

console.log(rowData);


 const [columnDefs, setColumnDefs] = useState([
  {field: 'status',
  
  cellRenderer: params => {
      return <StatusIcon status={params.value}/>
                          } /* filter: true */},
  {field: 'name', /* filter: true */},
  {field: 'hostname', /* filter: true */},
  {field: 'type'},
  {field: 'lastresponsetime', cellRenderer: 'agAnimateSlideCellRenderer'},
  {field: 'resolution'},
  {field: 'created',  cellRenderer: params => {
    return getDate(params.value)
                        }},
  
]);

const defaultColDef = useMemo( ()=> ({
  
    flex: 1,
    minWidth: 120,
    resizable: true,
    cellClass: 'align-right',
    sortable: true,
 /*  editable: true, */
 /* filter: 'agTextColumnFilter' */
 
 
 
}));



const cellClickedListener = useCallback( event => {
  console.log('cellClicked', event);
}, []);
/* let theSortedList = []; */
/*  console.log(props); */
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


/* const [sortBy, setSortBy] = useState("status");
const [sortDirection, setSortDirection] = useState("desc");
 */
/* useEffect(() => {
  // Create a copy before sorting, as the original array is frozen in strict mode.
  const sortedData = [...props.checksData];
  if (sortedData?.length) {
    sortedData.sort(compareObjectsByStatus(sortBy, sortDirection === 'asc'));

    if (onSortChange) {
      onSortChange(sortedData);
    }
  }
}, [props.checksData, sortDirection, sortBy]); */

/* function compareObjectsByStatus(serverA, serverB) {
  if (serverA[settings.sortBy] < serverB[settings.sortBy]) {
    return -1 * direction;
  } else {
    return 1 * direction;
  }
}  */


//  function selectSort(event){
//   console.log(event);
  
//   useEffect(() => {
     
//     setSortBy(event.target.dataset.sort);
//     setSortDir(event.target.dataset.sortDirection) 

// },[]); 
// } 

 const settings = {
  sortBy: "response",
  sortDir: "asc",
}; 

 function selectSort(event) {
    console.log(event)
    const sortBy = event.target.dataset.sort;
    const sortDir = event.target.dataset.sortDirection;
  
    // Toggle the direction!
    if (sortDir === "asc") {
      event.target.dataset.sortDirection = "desc";
    } else {
      event.target.dataset.sortDirection = "asc";
    }
    console.log(`Sort by: ${sortBy} - ${sortDir}`);
    setSort(sortBy, sortDir);
  } 

 function setSort(sortBy, sortDir) {
    settings.sortBy = sortBy;
    settings.sortDir = sortDir;
    sortList(props.checksData);
  } 

   function sortList(sortedList) {
    let direction = 1;
    if (settings.sortDir === "desc") {
      direction = -1;
    } else {
      direction = 1;
    }
  
    let theSortedList = sortedList.sort(sortByProperty());
  
    function sortByProperty(serverA, serverB) {
      if (serverA[settings.sortBy] < serverB[settings.sortBy]) {
        return -1 * direction;
      } else {
        return 1 * direction;
      }
    }
    return theSortedList;
  }
/* <div className="dashboard-container"> 
        <div className="server-container">
        <div className="status-headlines">
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="status">Status</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="site">Site Name</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="host">Host</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="type">Type</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="response">Response Time</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="resolution">Resolution</button>
          <button onClick={(e)=>{selectSort(e)}} data-action="sort" data-sort-direction="asc" data-sort="created">Created</button>
        </div>
        {props.checksData.map((server)=>(
        <div className="server">
        <h2 className="server-status" data-field="status">{<StatusIcon status={server.status}/>}</h2>
        <h2 className="server-name" data-field="site">{server.name}</h2>
        <h2 className="server-hostname" data-field="host">{server.hostname}</h2>
        <h2 className="server-type" data-field="type">{server.type}</h2>
        <h2 className="server-lastresponsetime" data-field="response">{server.lastresponsetime} ms</h2>
        <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
        <h2 className="server-resolution" data-field="created">{getDate(server)}</h2>
       </div>
       ))  } 
        </div>
params.columnApi.autoSizeAllColumns();
    </div> */
   
    return ( <div className="dashboard-container"><div className="ag-theme-alpine" style={{width: 100+"%", height: 100+"%"}}>

    <AgGridReact modules={[ClientSideRowModelModule]}
    /* headerHeight={30}
    rowHeight={20} */
    enableCellChangeFlash={true}
        /* ref={gridRef} // Ref for accessing Grid's API
 */ref={gridRef}
        rowData={rowData} // Row Data for Rows

        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties

        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        /* rowSelection='multiple' */ // Options - allows click selection of rows

      /*   onCellClicked={cellClickedListener} // Optional - registering for Grid Event
       */  />
  </div>
  </div>
    
  )
    }
    
    export default Dashboard;
    