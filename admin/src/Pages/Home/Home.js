
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/Featuredchart/Featured";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/Widgetsm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
