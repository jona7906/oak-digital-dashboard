import DropdownType from './DropdownType.jsx'
import DropdownTime from './DropdownTime.jsx'
 

function Header() {
 
/* console.log(event) */
  return (
   <header>
       <nav>
         <h1>OAK DIGITAL</h1>
         <div className="dropdownmenu">
          <DropdownType/>
          <DropdownTime/>
         </div>
       </nav>
   </header>
  )
}

export default Header;

