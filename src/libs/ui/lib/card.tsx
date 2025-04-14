import React, { CSSProperties } from "react";

import {
  CustomCssProps,
  ImageSize,
  ResponsiveSpacing,
  Spacing,
} from "@aces/types";
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
  id?: string;
  raised?: boolean;
  borderRadius?: CSSProperties["borderRadius"];
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: CustomCssProps;
  children: React.ReactNode;
}

export const Card = ({
  id,
  raised = false,
  borderRadius,
  fullWidth = true,
  fullHeight = false,
  style,
  children,
  ...props
}: CardProps) => {
  return (
    <MuiCard
      id={id}
      raised={raised}
      sx={{
        borderRadius: borderRadius,
        display: "flex",
        flexDirection: "column",
        width: fullWidth ? "100%" : "auto",
        height: fullHeight ? "100%" : "auto",
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
  height = "260px",
  style,
  ...props
}: CardMediaProps) => {
  return (
    <MuiCardMedia
      component="img"
      alt={alt}
      image={image}
      sx={{
        ...style,
        ...(imageSize === "native" ? { width: "auto", objectFit: "none" } : {}),
        height: imageSize !== "native" ? height : "auto",
      }}
      {...props}
    />
  );
};

Card.Media = CardMedia;

interface CardContentProps extends Pick<MuiCardContentProps, "children"> {
  paddingX?: Spacing;
  paddingY?: Spacing;
  style?: CustomCssProps;
}

const CardContent = ({
  style,
  paddingX,
  paddingY,
  children,
  ...props
}: CardContentProps) => {
  return (
    <MuiCardContent
      sx={{
        marginX: 0,
        marginY: 0,
        paddingX: paddingX,
        paddingY: paddingY,
        width: "100%",
        flex: 1,
        ...style,
      }}
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
      sx={{ display: "block", flexDirection: "column" }}
    >
      {children}
    </MuiCardActionArea>
  );
};

Card.ActionArea = CardActionArea;
