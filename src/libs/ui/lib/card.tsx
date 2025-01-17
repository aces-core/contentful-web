import React, { CSSProperties } from "react";

import {
  CustomCssProps,
  ImageSize,
  ResponsiveSpacing,
  Spacing,
} from "@maverick/types";
import MuiCard from "@mui/material/Card";
import MuiCardContent, {
  CardContentProps as MuiCardContentProps,
} from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardActions, {
  CardActionsProps as MuiCardActionsProps,
} from "@mui/material/CardActions";
import MuiCardActionArea from "@mui/material/CardActionArea";

interface CardProps {
  raised?: boolean;
  borderRadius?: CSSProperties["borderRadius"];
  style?: CustomCssProps;
  children: React.ReactNode;
}

export const Card = ({
  raised = false,
  borderRadius,
  style,
  children,
  ...props
}: CardProps) => {
  return (
    <MuiCard
      raised={raised}
      sx={{
        borderRadius: borderRadius,
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

interface CardMediaProps {
  component?: React.ElementType;
  alt?: string;
  image: string;
  imageSize?: ImageSize;
  height?: ResponsiveSpacing;
  style?: CustomCssProps;
}

const CardMedia = ({
  alt,
  image,
  imageSize = "fill",
  height,
  style,
  ...props
}: CardMediaProps) => {
  return (
    <MuiCardMedia
      component="img"
      alt={alt}
      image={image}
      sx={
        imageSize === "native"
          ? { width: "auto", objectFit: "none", ...style }
          : { ...style }
      }
      height={imageSize !== "native" ? (height ?? "auto") : "auto"}
      {...props}
    />
  );
};

Card.Media = CardMedia;

interface CardContentProps extends Pick<MuiCardContentProps, "children"> {
  marginX?: Spacing;
  marginY?: Spacing;
  style?: CustomCssProps;
}

const CardContent = ({
  style,
  marginX,
  marginY,
  children,
  ...props
}: CardContentProps) => {
  return (
    <MuiCardContent
      sx={{ marginX: marginX, marginY: marginY, ...style }}
      {...props}
    >
      {children}
    </MuiCardContent>
  );
};

Card.Content = CardContent;

interface CardActionsProps extends Pick<MuiCardActionsProps, "children"> {
  marginX?: Spacing;
  marginY?: Spacing;
  marginTop?: Spacing;
  marginBottom?: Spacing;
  style?: CustomCssProps;
}

const CardActions = ({
  style,
  marginX,
  marginTop,
  marginBottom,
  children,
  ...props
}: CardActionsProps) => {
  return (
    <MuiCardActions
      sx={{
        marginX: marginX,
        marginTop: marginTop,
        marginBottom: marginBottom,
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiCardActions>
  );
};

Card.Actions = CardActions;

const CardActionArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiCardActionArea
      component="a"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {children}
    </MuiCardActionArea>
  );
};

Card.ActionArea = CardActionArea;
