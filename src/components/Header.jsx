import DropdownMenu from './Dropdown.jsx'
 

function Header() {
 
/* console.log(event) */
  return (
   <header>
       <nav>
         <h1>OAK DIGITAL</h1>
         <div className="dropdownmenu">
          <DropdownMenu/>
          <DropdownMenu/>
         </div>
       </nav>
   </header>
  )
}

export default Header;

