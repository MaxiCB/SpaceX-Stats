import React from "react";

interface PatchProps {
  image_link: string;
  rocket_name: string;
}

const RocketPatch: React.FC<PatchProps> = ({ image_link, rocket_name }) => {
  return <img style={{ width: "320px" }} src={image_link} alt={rocket_name} />;
};

export default RocketPatch;
