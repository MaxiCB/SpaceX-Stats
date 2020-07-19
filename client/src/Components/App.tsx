import React from "react";
import axios from "axios";
import Rocket, { IRocket } from "./Rocket";

const App: React.FC = () => {
  const [rocketData, setrocketData] = React.useState<IRocket[]>([]);

  const tempRockets: IRocket[] = [];

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/launches")
      .then((res) => {
        const data = res.data;
        data.forEach((element: any) => {
          const newRocket: IRocket = {
            date: element.date,
            details: element.details,
            name: element.name,
            rocket_image: element.rocket_image,
            patch_image: element.patch_image,
            reddit: element.reddit.campaign,
            webcast: element.webcast,
            article: element.article,
            wikipedia: element.wikipedia,
          };
          tempRockets.push(newRocket);
        });
        setrocketData(tempRockets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {rocketData.map((rocket, index) => {
        return <Rocket rocket={rocket} key={index} />;
      })}
    </div>
  );
};

export default App;
