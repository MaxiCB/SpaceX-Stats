import React from "react";

interface ImageProps {
  image_link: string;
  rocket_name: string;
}

const RocketImage: React.FC<ImageProps> = ({ image_link, rocket_name }) => {
  return <img style={{ width: "320px" }} src={image_link} alt={rocket_name} />;
};

export default RocketImage;
