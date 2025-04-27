import { CSSProperties } from "react";

import { Box } from "./box";

interface HTMLVideoProps {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
  objectFit?: "responsive" | "fill";
  cover?: boolean;
  style?: CSSProperties;
}

export const HTMLVideo: React.FC<HTMLVideoProps> = ({
  src,
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  poster,
  objectFit = "responsive",
  style,
}) => {
  const containerStyle: CSSProperties =
    objectFit === "responsive"
      ? {
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          overflow: "hidden",
          ...style,
        }
      : {
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          ...style,
        };

  const videoStyle: CSSProperties =
    objectFit === "responsive"
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }
      : {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        };

  return (
    <Box style={containerStyle}>
      <video
        src={src}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        poster={poster}
        playsInline
        style={videoStyle}
      >
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};
