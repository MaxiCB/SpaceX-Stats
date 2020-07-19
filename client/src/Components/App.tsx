import React from "react";
import Rocket from "./Rocket";

const tempRocket = {
  patch_image: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
  reddit:
    "https://www.reddit.com/r/spacex/comments/ezn6n0/crs20_launch_campaign_thread",
  rocket_image:
    "https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg",
  webcast: "https://youtu.be/1MkcWK2PnsU",
  article:
    "https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/",
  wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-20",
  details:
    "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
  name: "CRS-20",
  date: "2020-03-07T04:50:31.000Z",
  id: "5eb87d42ffd86e000604b384",
};

const App: React.FC = () => {
  const [rocketData, setrocketData] = React.useState([]);

  const getRockets = () => {
    fetch("https://api.spacexdata.com/v4/launches/past")
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getRockets();
  }, []);

  return (
    <div>
      <Rocket rocket={tempRocket} />
    </div>
  );
};

export default App;
