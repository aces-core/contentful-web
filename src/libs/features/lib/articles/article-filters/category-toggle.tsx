"use client";

import { useEffect, useState } from "react";

import { defaultLocale, Locale } from "@aces/i18n";
import { useGetLocale, useQueryParam } from "@aces/hooks";
import { CfCollectionItems } from "@aces/types";
import { palette, shape, spacing, typography } from "@aces/theme";
import { ScrollBox, Skeleton, ToggleButton, ToggleButtonGroup } from "@aces/ui";

import { Query } from "../config";

interface CategorySelectProps {
  categoriesCollection: CfCollectionItems;
  total: number;
  lang: Locale;
}

const buttonToggleSpacing = 2.5;

export const CategoryToggle = ({
  categoriesCollection,
  total,
  lang = defaultLocale,
}: CategorySelectProps) => {
  const { t, loading } = useGetLocale(lang, "common");
  const { getQueryParam, setQueryParam } = useQueryParam();

  const allValue = "all";
  const [categorySelected, setCategorySelected] = useState<string>(allValue);

  const handleCategoriesChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    if (!newValue) return;

    if (newValue === allValue) {
      setCategorySelected(allValue);
      setQueryParam(Query.categories, null);
    } else {
      setCategorySelected(newValue);
      setQueryParam(Query.categories, newValue);
    }
  };

  useEffect(() => {
    const categoriesParam = getQueryParam(Query.categories);
    if (categoriesParam) {
      setCategorySelected(categoriesParam);
    }
  }, []);

  if (loading) {
    return (
      <CategoryToggleSkeleton categoriesCollection={categoriesCollection} />
    );
  }

  return (
    <ScrollBox>
      <ToggleButtonGroup
        value={categorySelected}
        style={{
          marginX: -buttonToggleSpacing,
        }}
      >
        <CategoryToggleButton
          value={allValue}
          disabled={categorySelected === allValue}
          onChange={handleCategoriesChange}
        >
          {!loading ? (
            <span
              dangerouslySetInnerHTML={{
                __html: `${t.postType.allCategories} <strong style="margin-left: 6px;">${total}</strong>`,
              }}
            />
          ) : (
            <Skeleton variant="text" width="25px" />
          )}
        </CategoryToggleButton>
        {categoriesCollection.items.map((item) => (
          <CategoryToggleButton
            key={item.slug}
            value={item.slug}
            disabled={item.slug === categorySelected}
            onChange={handleCategoriesChange}
          >
            {item.title}{" "}
            <strong style={{ marginLeft: "6px" }}>
              {item.linkedFrom?.articleCollection.total}
            </strong>
          </CategoryToggleButton>
        ))}
      </ToggleButtonGroup>
    </ScrollBox>
  );
};

interface CategorySelectSkeletonProps {
  categoriesCollection: CfCollectionItems;
}

const CategoryToggleSkeleton = ({
  categoriesCollection,
}: CategorySelectSkeletonProps) => {
  return (
    <ScrollBox>
      <ToggleButtonGroup value="" style={{ marginX: -buttonToggleSpacing }}>
        <CategoryToggleButton value={""} disabled>
          <Skeleton variant="text" width="25px" />
        </CategoryToggleButton>
        {categoriesCollection.items.map((item) => (
          <CategoryToggleButton key={item.slug} value={item.slug} disabled>
            <Skeleton variant="text" width="80px" />
          </CategoryToggleButton>
        ))}
      </ToggleButtonGroup>
    </ScrollBox>
  );
};

interface CategoryToggleButtonProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  onChange?: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => void;
}

const CategoryToggleButton = ({
  value,
  disabled,
  children,
  onChange,
}: CategoryToggleButtonProps) => {
  return (
    <ToggleButton
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={{
        borderRadius: `${shape.borderRadius * spacing}px !important`,
        border: `1px solid ${palette.border.default} !important`,
        color: palette.text.primary,
        marginX: buttonToggleSpacing,
        textTransform: "capitalize",
        fontSize: typography.caption,
        padding: 2.5,
        whiteSpace: "nowrap",
        "&.Mui-selected, &.Mui-selected:hover": {
          background: palette.primary.main,
          borderColor: `${palette.primary.main} !important`,
          color: palette.primary.contrastText,
        },
      }}
    >
      {children}
    </ToggleButton>
  );
};
