// STYLES
import "@styles/AdvancedStatisticsCard.scss";
import "@styles/global.scss";

const AdvancedStatisticsCard = ({ img, h2, text }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt={`${h2} image`} />
      </div>
      <h2>{h2}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AdvancedStatisticsCard;
