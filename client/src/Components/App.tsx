import React from "react";
import axios from "axios";
import Rocket, { IRocket } from "./Rocket";

const App: React.FC = () => {
  const [rocketData, setrocketData] = React.useState<IRocket[]>([]);

  const tempRockets: IRocket[] = [];

  React.useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/past")
      .then((res) => {
        const data = res.data;
        data.forEach((element: any) => {
          const newRocket: IRocket = {
            date: element.date_utc || "",
            details: element.details || "",
            name: element.name || "",
            rocket_image: element.links.flickr.original[0] || "",
            patch_image: element.links.patch.large || "",
            reddit: element.links.reddit.campaign || "",
            webcast: element.links.webcast || "",
            article: element.links.article || "",
            wikipedia: element.links.wikipedia || "",
          };
          tempRockets.push(newRocket);
        });
        setrocketData(tempRockets);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {rocketData.map((rocket) => {
        return <Rocket rocket={rocket} key={rocket.name} />;
      })}
    </div>
  );
};

export default App;
