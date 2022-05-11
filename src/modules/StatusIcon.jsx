import "../styles/App.scss"

function StatusIcon(props) {
  function findStatus(){
    if(props.status === "up"){
        console.log(document.querySelector(".statusIcon"));
        return (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <clipPath id="clip-iPhone_13_12_Pro_1">
            <rect width="400" height="400"/>
          </clipPath>
        </defs>
        <g id="iPhone_13_12_Pro_1" data-name="iPhone 13, 12 Pro – 1" clip-path="url(#clip-iPhone_13_12_Pro_1)">
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="200" cy="200" r="200" fill="#2fac55"/>
          <g id="Group_1" data-name="Group 1" transform="translate(-37 -78.2)">
            <rect id="Rectangle_1" data-name="Rectangle 1" width="35" height="188" rx="17.5" transform="translate(220 219.2)" fill="#fff"/>
            <path id="Polygon_1" data-name="Polygon 1" d="M78.219,8.464a7,7,0,0,1,11.561,0l70.743,103.588A7,7,0,0,1,154.743,123H13.257a7,7,0,0,1-5.781-10.948Z" transform="translate(153 149.2)" fill="#fff"/>
          </g>
        </g>
      </svg>
      )
      //  document.querySelector(".statusIcon").style.backgroundImage = "url('./public/images/server-up-icon.svg')";
        /* console.log("IM UP"); */
      } else{
        console.log(document.querySelector(".statusIcon"));
        
        return(
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <clipPath id="clip-iPhone_13_12_Pro_2">
            <rect width="400" height="400"/>
          </clipPath>
        </defs>
        <g id="iPhone_13_12_Pro_2" data-name="iPhone 13, 12 Pro – 2" clip-path="url(#clip-iPhone_13_12_Pro_2)">
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="200" cy="200" r="200" fill="#ac2f2f"/>
          <g id="Group_1" data-name="Group 1" transform="translate(437 478.2) rotate(180)">
            <rect id="Rectangle_1" data-name="Rectangle 1" width="35" height="188" rx="17.5" transform="translate(220 219.2)" fill="#fff"/>
            <path id="Polygon_1" data-name="Polygon 1" d="M78.219,8.464a7,7,0,0,1,11.561,0l70.743,103.588A7,7,0,0,1,154.743,123H13.257a7,7,0,0,1-5.781-10.948Z" transform="translate(153 149.2)" fill="#fff"/>
          </g>
        </g>
      </svg>
        )
          // document.querySelector(".statusIcon").style.backgroundImage = "url('../src/public/images/server-down-icon.svg')";
          }
        }

      return (
        <div className="statusIcon">{findStatus()}</div>
      );
   
  }
  
  export default StatusIcon;
  