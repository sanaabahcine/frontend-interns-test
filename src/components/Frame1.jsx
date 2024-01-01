import "../Styles/Frame1.css";

const Frame1 = () => {
  return (
    <div className="frame1">
        <div>
          <div className="frame1-header">
            This Week <span className="chevron">&#9660;</span>
          </div>
          <img className="F1LHG" src="/src/assets/F1LHG.PNG" alt="Notification Icon" />
        </div>
      
      <div className="frame1-body">
        <div className="frame1-BG">
          <div className="sales-text">Sales</div>
          <div className="amount-and-percentage">
  <div className="amount-text">₦0.00</div>
  <div className="percentage-text">+0.00%</div>
</div>
        </div>
        <div className="volume-text">
          Volume
          <div className="volume-zero">0</div>
        </div>
      </div>
      </div>
  );
};

export default Frame1;
