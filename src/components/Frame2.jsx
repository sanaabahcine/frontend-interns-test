import "../Styles/Frame2.css";
import GroupIcon from '@mui/icons-material/Group';
const Frame2 = () => {
  return (
    <div className="frame2">
    <div>
      <div className="frame2-header">
        This Week <span className="chevron">&#9660;</span>
      </div>
      <div className="pink-border">
        <GroupIcon className="F2HG" />
      </div>    </div>
  
    <div className="frame2-body">
        <div className="frame2-BG">
          <div className="customer-text">customer</div>
          <div className="F2BG">
  <div className="zero-text">0</div>
  <div className="percentage-text">+0.00%</div>
</div>
        </div>
        <div className="active-text">
          Active
          <div className="F2BG">
           
          <div className="active-zero">0</div>
          <div className="percentage-text">+0.00%</div>

         </div> 
        </div>
      </div>
  </div>
  );
};

export default Frame2;
