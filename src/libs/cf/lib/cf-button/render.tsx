import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfLinkProps } from "@maverick/types";
import { generateId } from "@maverick/utils";
import {
  Button,
  ButtonColor,
  ButtonVariant,
  Icon,
  IconEnum,
} from "@maverick/ui";
import { CfLink } from "@maverick/cf";

export enum ButtonStyleType {
  Primary = "Primary",
  PrimaryOutline = "Primary Outline",
  PrimaryGradient = "Primary Gradient",
  Secondary = "Secondary",
  SecondaryOutline = "Secondary Outline",
  Knockout = "Knockout",
}

const buttonStyles: Record<
  ButtonStyleType,
  { color: ButtonColor; variant: ButtonVariant }
> = {
  [ButtonStyleType.Primary]: { color: "primary", variant: "contained" },
  [ButtonStyleType.PrimaryGradient]: {
    color: "gradient",
    variant: "contained",
  },
  [ButtonStyleType.PrimaryOutline]: { color: "primary", variant: "outlined" },
  [ButtonStyleType.Secondary]: { color: "secondary", variant: "contained" },
  [ButtonStyleType.SecondaryOutline]: {
    color: "secondary",
    variant: "outlined",
  },
  [ButtonStyleType.Knockout]: {
    color: "inherit",
    variant: "text",
  },
};

export interface CfButtonProps extends CfBaseComponent {
  title: string;
  link: CfLinkProps;
  buttonStyle: ButtonStyleType;
  rightIcon?: "RightLongArrow";
  fullWidthMobile?: boolean;
}

export const CfButton = ({
  internalTitle,
  title,
  link,
  buttonStyle,
  rightIcon,
  fullWidthMobile,
  __typename,
  id,
  lang,
}: CfButtonProps) => {
  const style = buttonStyles[buttonStyle];

  if (!Button || !style) return null;

  return (
    <CfLink
      linkType={link.linkType}
      pageLink={link.pageLink}
      customLink={link.customLink}
      target={link.target}
      lang={lang}
    >
      <Button
        id={generateId(internalTitle)}
        data-component={__typename}
        color={style.color}
        variant={style.variant}
        fullWidthMobile={fullWidthMobile}
        endIcon={rightIcon && <Icon icon={rightIcon as IconEnum} />}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "title",
          locale: lang,
        })}
      >
        {title}
      </Button>
    </CfLink>
  );
};
