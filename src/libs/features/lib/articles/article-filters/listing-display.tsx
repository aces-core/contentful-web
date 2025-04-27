"use client";

import { useGetLocale } from "@aces/hooks";
import { defaultLocale, Locale } from "@aces/i18n";
import { articleListingDisplayTypes, useArticlesState } from "@aces/store";
import { palette, shape, typography } from "@aces/theme";
import {
  FlexBox,
  Icon,
  IconEnum,
  Text,
  ToggleButton,
  ToggleButtonGroup,
} from "@aces/ui";

interface ListingDisplayProps {
  lang: Locale;
}

export const ListingDisplay = ({
  lang = defaultLocale,
}: ListingDisplayProps) => {
  const { t, loading } = useGetLocale(lang, "common");

  const { articleListingDisplay, setArticleListingDisplay } =
    useArticlesState();

  const handleDisplayChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: articleListingDisplayTypes,
  ) => {
    if (!newValue) return;

    setArticleListingDisplay(newValue);
  };

  return (
    <ToggleButtonGroup value={articleListingDisplay} marginLeft={5}>
      <ListingToggleButton
        value="grid"
        label={loading ? "" : t.postType.listingDisplay.grid}
        icon="Apps"
        disabled={articleListingDisplay === "grid"}
        onChange={handleDisplayChange}
      />
      <ListingToggleButton
        value="list"
        label={loading ? "" : t.postType.listingDisplay.list}
        icon="FormatListBulleted"
        disabled={articleListingDisplay === "list"}
        onChange={handleDisplayChange}
      />
    </ToggleButtonGroup>
  );
};

interface ListingToggleButtonProps {
  value: string;
  disabled?: boolean;
  label: string;
  icon: keyof typeof IconEnum;
  onChange?: (
    event: React.MouseEvent<HTMLElement>,
    newValue: articleListingDisplayTypes,
  ) => void;
}

const ListingToggleButton = ({
  value,
  disabled,
  label,
  icon,
  onChange,
}: ListingToggleButtonProps) => {
  return (
    <ToggleButton
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={{
        borderRadius: shape.borderRadius,
        border: `1px solid ${palette.border.default} !important`,
        color: palette.text.primary,
        textTransform: "capitalize",
        fontSize: typography.caption,
        padding: 3,
        whiteSpace: "nowrap",
        width: "40px",
        height: "40px",
        "&.Mui-selected, &.Mui-selected:hover": {
          color: palette.primary.main,
          background: palette.common.white,
        },
      }}
    >
      <FlexBox alignItems="center" flexDirection="column">
        <Text.SubtitleSmall
          color={`${palette.text.primary} !important`}
          style={{ fontSize: "7px", lineHeight: 1 }}
          marginBottom={0.2}
        >
          {label}
        </Text.SubtitleSmall>
        <Icon icon={icon} size={20} />
      </FlexBox>
    </ToggleButton>
  );
};
