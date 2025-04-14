import MuiBadge, { BadgeProps as MuiBadgeProps } from "@mui/material/Badge";

import { CustomCssProps, ResponsiveSpacing } from "@aces/types";

interface BadgeProps
  extends Pick<
    MuiBadgeProps,
    | "anchorOrigin"
    | "badgeContent"
    | "children"
    | "color"
    | "invisible"
    | "max"
    | "overlap"
    | "showZero"
    | "variant"
  > {
  marginY?: ResponsiveSpacing;
  marginX?: ResponsiveSpacing;
  marginTop?: ResponsiveSpacing;
  marginRight?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  marginLeft?: ResponsiveSpacing;
  style?: CustomCssProps;
}

export const Badge = ({
  anchorOrigin,
  badgeContent,
  children,
  color,
  invisible,
  max,
  overlap,
  showZero,
  variant,
  marginY,
  marginX,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  style,
  ...rest
}: BadgeProps) => {
  return (
    <MuiBadge
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      color={color}
      invisible={invisible}
      max={max}
      overlap={overlap}
      showZero={showZero}
      variant={variant}
      sx={{
        marginY,
        marginX,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        ...style,
      }}
      {...rest}
    >
      {children}
    </MuiBadge>
  );
};
