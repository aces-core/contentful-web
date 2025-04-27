"use client";

import { useGetLocale } from "@aces/hooks";
import { defaultLocale, Locale } from "@aces/i18n";
import { Box, Button, FlexBox, LinearProgress, Skeleton, Text } from "@aces/ui";

interface LoadMoreProps {
  handleLoadMore: () => void;
  currentNumber: number;
  total: number;
  title?: string;
  showProgression?: boolean;
  lang: Locale;
}

export const LoadMore = ({
  handleLoadMore,
  currentNumber = 0,
  total,
  title,
  showProgression = true,
  lang = defaultLocale,
}: LoadMoreProps) => {
  const { t, loading } = useGetLocale(lang, "common");
  const value = (currentNumber / total) * 100;

  return (
    <FlexBox flexDirection="column" alignItems={"center"} marginY={12}>
      {showProgression && (
        <Box>
          {loading ? (
            <Skeleton variant="text" width={120} />
          ) : (
            <Text>
              {`${t.pagination.youViewed} ${currentNumber} ${t.pagination.of} ${total} ${t.pagination.posts}`}
            </Text>
          )}
          <LinearProgress
            color="success"
            value={value}
            maxWidth={250}
            marginY={5}
          />
        </Box>
      )}
      <Button
        onClick={handleLoadMore}
        variant="outlined"
        disabled={value === 100}
      >
        {loading ? (
          <Skeleton variant="text" width={60} />
        ) : title ? (
          title
        ) : (
          t.pagination.loadMore
        )}
      </Button>
    </FlexBox>
  );
};
