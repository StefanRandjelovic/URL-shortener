// STYLES
import "@styles/AdvancedStatistics.scss";

// COMPONENTS
import AdvancedStatisticsCard from "@components/AdvancedStatisticsCard.jsx";

// ARRAY INFO
import { advancedStatisticsArr } from "@helpers/array-info.js";

const AdvancedStatistics = () => {
  console.log(advancedStatisticsArr);
  return (
    <div className="advanced-statistics">
      <div className="upper-portion">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.{" "}
        </p>
      </div>
      <div className="lower-portion">
        {advancedStatisticsArr.map((card) => (
          <AdvancedStatisticsCard
            key={crypto.randomUUID()}
            img={card.img}
            h2={card.h1}
            text={card.text}
          />
        ))}
        <hr />
      </div>
    </div>
  );
};

export default AdvancedStatistics;
