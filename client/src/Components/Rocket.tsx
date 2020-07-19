import React from "react";
import RocketImage from "./RocketImage";
import RocketPatch from "./RocketPatch";
import RocketSocial from "./RocketSocial";

interface Rocket {
  date: string;
  details: string;
  name: string;
  rocket_image: string;
  patch_image: string;
  reddit: string;
  webcast: string;
  article: string;
  wikipedia: string;
}

interface RocketProps {
  rocket: Rocket;
}

const Rocket: React.FC<RocketProps> = ({ rocket }) => {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <RocketImage
          image_link={rocket.rocket_image}
          rocket_name={rocket.name}
        />
        <RocketPatch
          image_link={rocket.patch_image}
          rocket_name={rocket.name}
        />
      </div>
      <RocketSocial
        reddit={rocket.reddit}
        webcast={rocket.webcast}
        article={rocket.article}
        wikipedia={rocket.wikipedia}
      />
      <h1>{rocket.name}</h1>
      <h4>{rocket.date}</h4>
      <p style={{ width: "50%" }}>{rocket.details}</p>
    </div>
  );
};

export default Rocket;
