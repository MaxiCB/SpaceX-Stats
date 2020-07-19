import React from "react";
import RocketImage from "./RocketImage";
import RocketPatch from "./RocketPatch";
import RocketSocial from "./RocketSocial";

export interface IRocket {
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
  rocket: IRocket;
}

const Rocket: React.FC<RocketProps> = ({ rocket }) => {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "#F93943",
        borderRadius: "10px",
        margin: 10,
      }}
    >
      <div>
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
      <p>{rocket.details}</p>
    </div>
  );
};

export default Rocket;
