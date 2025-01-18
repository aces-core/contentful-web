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
  fullWidth?: boolean;
  style?: CustomCssProps;
  children: React.ReactNode;
}

export const Card = ({
  raised = false,
  borderRadius,
  fullWidth = true,
  style,
  children,
  ...props
}: CardProps) => {
  return (
    <MuiCard
      raised={raised}
      sx={{
        borderRadius: borderRadius,
        display: "flex",
        width: fullWidth ? "100%" : "auto",
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
