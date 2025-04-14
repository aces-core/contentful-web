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
      sx={style}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

export const H1 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h1" {...props} />
);

export const H2 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h2" {...props} />
);

export const H3 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h3" {...props} />
);

export const H4 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h4" {...props} />
);

export const H5 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h5" {...props} />
);

export const H6 = ({ ...props }: TextBaseProps) => (
  <TextBase variant="h6" {...props} />
);

export const Text = ({ ...props }: TextBaseProps) => (
  <TextBase variant="body1" {...props} />
);

export const Subtitle = ({ ...props }: TextBaseProps) => (
  <TextBase variant="subtitle1" {...props} />
);

Text.Subtitle = Subtitle;

export const SubtitleSmall = ({ ...props }: TextBaseProps) => (
  <TextBase variant="subtitle2" {...props} />
);

Text.SubtitleSmall = SubtitleSmall;

const Small = (props: TextBaseProps) => <TextBase variant="body2" {...props} />;

Text.Small = Small;

export const ExtraSmall = (props: TextBaseProps) => (
  <TextBase variant="caption" {...props} />
);

Text.ExtraSmall = ExtraSmall;
