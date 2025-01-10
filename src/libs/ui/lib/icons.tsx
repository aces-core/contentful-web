"use client";

import React from "react";
import * as MuiIcons from "@mui/icons-material";
import { IconProps as MuiIconProps } from "@mui/material/Icon";

import { CustomCssProps } from "@maverick/types";
import { Image } from "@maverick/ui";

export type IconSize = MuiIconProps["fontSize"] | number | string;

type MuiIconNames = keyof typeof MuiIcons;

const customIcons = {
  Icon: {
    src: "/path/to/custom/icon.png",
    width: 24,
    height: 24,
  },
};

type CustomIconNames = keyof typeof customIcons;

type IconNames = MuiIconNames | CustomIconNames;

interface IconProps {
  className?: string;
  color?: string;
  icon: IconNames;
  size?: IconSize;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  style?: CustomCssProps | React.CSSProperties;
}

export const Icon = ({
  className,
  color,
  icon,
  size,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  style,
}: IconProps) => {
  const iconSize = size || "24px";

  if (customIcons[icon as keyof typeof customIcons]) {
    const CustomIcon = customIcons[icon as keyof typeof customIcons];
    return (
      <Image
        url={CustomIcon.src}
        width={Number(CustomIcon.width || iconSize)}
        height={Number(CustomIcon.height || iconSize)}
        alt={icon}
        style={{
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
          marginRight: marginRight || 0,
          marginLeft: marginLeft || 0,
          pointerEvents: "none",
          ...(style as React.CSSProperties),
        }}
      />
    );
  }

  const MuiIcon = MuiIcons[icon as keyof typeof MuiIcons];
  if (MuiIcon) {
    return (
      <MuiIcon
        className={className}
        style={{
          fontSize: iconSize,
        }}
        sx={{
          color: color || "inherit",
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
          marginRight: marginRight || 0,
          marginLeft: marginLeft || 0,
          pointerEvents: "none",
          ...style,
        }}
      />
    );
  }

  console.warn(`Icon "${icon}" not found.`);
  return null;
};
