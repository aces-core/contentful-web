import { generateId, truncate } from "@aces/utils";
import { CfLinkTypes, PageLinkTypes } from "@aces/types";
import { fontWeights, palette, typography } from "@aces/theme";
import { Box, H5, Skeleton, Text } from "@aces/ui";
import { CfLink } from "@aces/cf";

import { SearchResultsProps } from "./types";

export const ResultsItem = ({
  title,
  slug,
  excerpt,
  __typename,
}: SearchResultsProps) => {
  return (
    <Box id={generateId(slug)}>
      <CfLink
        linkType={CfLinkTypes.PageLink}
        pageLink={{
          slug: slug,
          __typename: __typename as PageLinkTypes,
        }}
        customLink={undefined}
        target="_self"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <H5
          component="p"
          fontWeight={fontWeights.bold}
          marginTop={3}
          marginBottom={3}
          color={palette.text.primary}
          style={{
            display: "inline-block",
            transition: "color 80ms ease",
            "&:hover": {
              color: typography.link.color,
            },
          }}
        >
          {title}
        </H5>
      </CfLink>
      {excerpt ? (
        <Text>{truncate(excerpt, 20)}</Text>
      ) : (
        <Box>
          <Skeleton variant="text" width={"80%"} style={{ marginBottom: 1 }} />
          <Skeleton variant="text" width={"60%"} style={{ marginBottom: 1 }} />
        </Box>
      )}
      <CfLink
        linkType={CfLinkTypes.PageLink}
        pageLink={{
          slug: slug,
          __typename: __typename as PageLinkTypes,
        }}
        customLink={undefined}
        target="_self"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Text
          marginTop={3}
          color={typography.link.color}
          style={{
            display: "inline-block",
          }}
        >
          Learn More
        </Text>
      </CfLink>
    </Box>
  );
};
