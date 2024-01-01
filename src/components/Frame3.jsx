// Header.js
import "../Styles/Frame3.css";

const Frame3 = () => {
  return (

    <div className="frame3">
    <div>
      <div className="frame3-header">
      This Week
      
         <span className="chevron">&#9660;</span>
        </div>
      <img  src="src/assets/F3HG.PNG" className="F3HG"   />
      

    </div>
  
    <div className="frame3-body">
        <div className="frame3-BG">
          <div className="allorders-text">All Orders</div>
          <div className="F3BG">
  <div className="zero-text">0</div>
</div>
        </div>
        <div className="pending-text">
          Pending
          <div className="F2BG">
           
          <div className="pending-zero">0</div>

         </div> 
        </div>
        <div className="completed-text">
        Completed
          <div className="F2BG">
           
          <div className="completed-zero">0</div>
          <div className="percentage-text">+0.00%</div>

         </div> 
        </div>
      </div>
  </div>
  );
};

export default Frame3;

  
