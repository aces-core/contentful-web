"use client";

import React from "react";
import {
  Add as AddIcon,
  AddCircle as AddCircleIcon,
  Check as CheckIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  EastOutlined as EastIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Facebook as FacebookIcon,
  InfoOutlined as InfoIcon,
  Instagram as InstagramIcon,
  LanguageOutlined as LanguageIcon,
  LinkedIn as LinkedInIcon,
  Menu as MenuIcon,
  PinDropOutlined as PinDropIcon,
  Remove as RemoveIcon,
  RemoveCircle as RemoveCircleIcon,
  WestOutlined as WestIcon,
  X as XIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { IconProps as MuiIconProps } from "@mui/material/Icon";

import { CustomCssProps } from "@maverick/types";
import { Image } from "@maverick/ui";

export enum IconEnum {
  Angled = "Angled",
  Bars = "Bars",
  Building = "Building",
  Calendar = "Calendar",
  Check = "Check",
  CheckboxOutlineBlank = "CheckboxOutlineBlank",
  ChevronUp = "ChevronUp",
  ChevronDown = "ChevronDown",
  ChevronRight = "ChevronRight",
  ChevronLeft = "ChevronLeft",
  Plus = "Plus",
  Minus = "Minus",
  Menu = "Menu",
  CheckCircle = "CheckCircle",
  CheckCircleOutline = "CheckCircleOutline",
  Close = "Close",
  AddCircle = "AddCircle",
  RemoveCircle = "RemoveCircle",
  Facebook = "Facebook",
  Twitter = "Twitter",
  Instagram = "Instagram",
  Linkedin = "Linkedin",
  Youtube = "Youtube",
  LeftLongArrow = "LeftLongArrow",
  RightLongArrow = "RightLongArrow",
  Vertical = "Vertical",
  Language = "Language",
  Info = "Info",
  LocationMap = "LocationMap",
  Globe = "Globe",
  PinDrop = "PinDrop",
  CentricLogoWhite = "CentricLogoWhite",
}

enum IconTypeEnum {
  Mui = "Mui",
  Custom = "Custom",
}

export type IconSize = MuiIconProps["fontSize"] | number | string;

interface IconProps {
  className?: string;
  color?: string;
  icon: keyof typeof IconEnum;
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
  let IconComponent: any = null;
  let IconType = null;
  const iconSize = size || "24px";

  switch (icon) {
    case IconEnum.Bars:
      IconComponent = MenuIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Check:
      IconComponent = CheckIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckboxOutlineBlank:
      IconComponent = CheckBoxOutlineBlankIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronUp:
      IconComponent = ExpandLessIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronDown:
      IconComponent = ExpandMoreIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronRight:
      IconComponent = ChevronRightIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.ChevronLeft:
      IconComponent = ChevronLeftIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Plus:
      IconComponent = AddIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Minus:
      IconComponent = RemoveIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Menu:
      IconComponent = MenuIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.CheckCircleOutline:
      IconComponent = CheckCircleOutlineIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Close:
      IconComponent = CloseIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.AddCircle:
      IconComponent = AddCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.RemoveCircle:
      IconComponent = RemoveCircleIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Facebook:
      IconComponent = FacebookIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Twitter:
      IconComponent = XIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Instagram:
      IconComponent = InstagramIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Linkedin:
      IconComponent = LinkedInIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Youtube:
      IconComponent = YouTubeIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.LeftLongArrow:
      IconComponent = WestIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.RightLongArrow:
      IconComponent = EastIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Language:
      IconComponent = LanguageIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.Info:
      IconComponent = InfoIcon;
      IconType = IconTypeEnum.Mui;
      break;
    case IconEnum.PinDrop:
      IconComponent = PinDropIcon;
      IconType = IconTypeEnum.Mui;
      break;
    default:
      IconComponent = null;
      IconType = null;
      break;
  }

  if (IconComponent && IconType === IconTypeEnum.Mui) {
    return (
      <IconComponent
        className={className}
        style={{
          fontSize: iconSize,
        }}
        sx={{
          color: color || "inherit",
          marginTop: marginTop !== null ? marginTop : 0,
          marginBottom: marginBottom !== null ? marginBottom : 0,
          marginRight: marginRight !== null ? marginRight : 0,
          marginLeft: marginLeft !== null ? marginLeft : 0,
          pointerEvents: "none",
          ...style,
        }}
      />
    );
  }

  if (IconComponent && IconType === IconTypeEnum.Custom) {
    return (
      <Image
        url={IconComponent.src}
        width={IconComponent.width || iconSize}
        height={IconComponent.height || iconSize}
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

  return null;
};
