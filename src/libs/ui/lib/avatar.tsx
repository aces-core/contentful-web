import React from "react";
import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import MuiAvatarGroup, {
  AvatarGroupProps as MuiAvatarGroupProps,
} from "@mui/material/AvatarGroup";

import { CustomCssProps } from "@aces/types";

interface AvatarProps extends Pick<MuiAvatarProps, "alt"> {
  image?: string;
  style?: CustomCssProps;
  children?: React.ReactNode;
  size?: number;
}

export function Avatar({ image, alt, children, size, style }: AvatarProps) {
  return (
    <MuiAvatar
      src={image}
      alt={alt}
      sx={{
        flexShrink: 0,
        width: size,
        height: size,
        ...style,
      }}
    >
      {children}
    </MuiAvatar>
  );
}

interface AvatarGroupProps
  extends Pick<MuiAvatarGroupProps, "max" | "children"> {
  style?: CustomCssProps;
}

export function AvatarGroup({ max, children, style }: AvatarGroupProps) {
  return (
    <MuiAvatarGroup max={max} sx={style}>
      {children}
    </MuiAvatarGroup>
  );
}
