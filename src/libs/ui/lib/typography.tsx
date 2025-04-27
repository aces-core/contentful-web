import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";

import { CustomCssProps } from "@aces/types";

interface TextBaseProps
  extends Pick<
    MuiTypographyProps,
    | "align"
    | "color"
    | "variant"
    | "component"
    | "fontWeight"
    | "letterSpacing"
    | "lineHeight"
    | "marginTop"
    | "marginBottom"
    | "children"
  > {
  style?: CustomCssProps;
}

const TextBase = ({
  component = "div",
  variant,
  align,
  color,
  fontWeight,
  letterSpacing,
  lineHeight,
  style,
  children,
  ...props
}: TextBaseProps) => {
  return (
    <MuiTypography
      variant={variant}
      align={align}
      component={component}
      color={color}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      sx={style}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

export const H1 = ({ component = "h1", ...props }: TextBaseProps) => (
  <TextBase variant="h1" component={component} {...props} />
);

export const H2 = ({ component = "h2", ...props }: TextBaseProps) => (
  <TextBase variant="h2" component={component} {...props} />
);

export const H3 = ({ component = "h3", ...props }: TextBaseProps) => (
  <TextBase variant="h3" component={component} {...props} />
);

export const H4 = ({ component = "h4", ...props }: TextBaseProps) => (
  <TextBase variant="h4" component={component} {...props} />
);

export const H5 = ({ component = "h5", ...props }: TextBaseProps) => (
  <TextBase variant="h5" component={component} {...props} />
);

export const H6 = ({ component = "h6", ...props }: TextBaseProps) => (
  <TextBase variant="h6" component={component} {...props} />
);

export const Text = ({ component = "p", ...props }: TextBaseProps) => (
  <TextBase variant="body1" component={component} {...props} />
);

export const Subtitle = ({ component = "p", ...props }: TextBaseProps) => (
  <TextBase variant="subtitle1" component={component} {...props} />
);
Text.Subtitle = Subtitle;

export const SubtitleSmall = ({ component = "p", ...props }: TextBaseProps) => (
  <TextBase variant="subtitle2" component={component} {...props} />
);
Text.SubtitleSmall = SubtitleSmall;

const Large = ({ component = "p", ...props }: TextBaseProps) => (
  <TextBase variant="body2" component={component} {...props} />
);
Text.Large = Large;

export const Small = ({ component = "p", ...props }: TextBaseProps) => (
  <TextBase variant="caption" component={component} {...props} />
);
Text.Small = Small;
