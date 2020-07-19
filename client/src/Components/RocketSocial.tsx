import React from "react";

interface SocialProps {
  reddit: string;
  webcast: string;
  article: string;
  wikipedia: string;
}

const RocketSocial: React.FC<SocialProps> = ({
  reddit,
  webcast,
  article,
  wikipedia,
}) => {
  return (
    <div style={{ color: "white" }}>
      <a href={reddit}>Reddit</a>
      <a href={webcast}>Webcast</a>
      <a href={article}>Article</a>
      <a href={wikipedia}>Wikipedia</a>
    </div>
  );
};

export default RocketSocial;
