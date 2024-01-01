import "../Styles/Frame5.css";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';const Frame5 = () => {
  return (
    <div className="frame5">
    
      <div className="frame5-header">
         <span className="chevron"></span>
    
      <div className="pink-border5">
        <FolderOpenIcon className="F5HG" />
      </div>  
    </div>
    
  
    <div className="frame5-body">
        <div className="frame5-BG">
          <div className="allproducts-text">All Products</div>
          <div className="F2BG">
  <div className="zero5-text">0</div>
  <div className="percentage5-text">+0.00%</div>
</div>
        </div>
        <div className="active5-text">
          Active
          <div className="F5BG">
           
          <div className="active5-zero">0</div>
          <div className="percentage5-text">+0.00%</div>

         </div> 
        </div>
      </div>
  </div>
  );
};

export default Frame5;
