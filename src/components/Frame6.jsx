import "../Styles/Frame6.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Frame6 = () => {
  return (
    <div className="frame6">
   <div>
      <div className="frame6-header">
        This Week <span className="chevron6">&#9660;</span>
      </div>
      <div className="pink-border">

      <ShoppingCartOutlinedIcon className="F6HG"/>
     </div>
    </div>
  
    <div className="frame6-body">
        <div className="frame5-BG">
          <div className="abandonedcart-text">Abandoned Cart</div>
          <div className="F2BG">
  <div className="zero-text">0</div>
  <div className="percentage-text">+0.00%</div>
</div>
        </div>
        <div className="costomers6-text">
          Customers
          <div className="F5BG">
           
          <div className="costomers6-zero">0</div>

         </div> 
        </div>
      </div>
  </div>
  );
};

export default Frame6;
