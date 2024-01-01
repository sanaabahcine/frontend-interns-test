import "../Styles/Header.css";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';


const Header = () => {
  return (
    <header className="app-header">
      <div className="left-section">
        <div className='Dashboard'> Dashboard</div>
        <div className="page">
        
      <HomeIcon  className="homelogo" />
    
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span>Page</span>
          <span>/</span>
          <span>Page</span>
        </div>
      </div>
      <div className="right-section">
      <div className="pink-borderNH">
      < NotificationsIcon  className="notification"  /> 
      </div>
        <div>
        <div className='Anima'>Anima Agrawal</div>
        <div className="LLC">Company LLC</div>
        </div>

        <div className="pink-borderKeyboar">

        <KeyboardDoubleArrowUpSharpIcon   className="logogauche" />
       </div>
      </div>
    </header>
  );
};

export default Header;
