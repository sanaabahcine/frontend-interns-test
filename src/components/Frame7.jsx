import "../Styles/Frame7.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Frame7 = () => {
  return (
    <div className="frame7">
      <div className="frame7-header">
        <div className="F7HG">Recent Orders</div>
      </div>
      <img src="src/assets/F7HG.PNG" className="F7HM" alt="F7HG" />
      <div className="frame3-body">
        <div className="F7BG">
          <div className="noorders">No Orders Yet?</div>
          <div className="F7BG1">
            Add products to your store and start<br />
            selling to see orders here.
            <div className="small-frame">
            <FavoriteBorderIcon className="heart" /> 
              <div className="newproduct7">New Product
              
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
