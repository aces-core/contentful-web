import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, Nested } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Container } from "@aces/ui";

import style from "./style.module.css";

export interface CfCodeEmbedProps extends CfBaseComponent, Nested {
  embedCode: string;
}

export const CfCodeEmbed = ({
  internalTitle,
  embedCode,
  nested,
  __typename,
  id,
  lang,
}: CfCodeEmbedProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : "",
        md: !nested ? componentSpacing.md : "",
      }}
    >
      <Container nested={nested}>
        <div
          className={style.embed}
          dangerouslySetInnerHTML={{
            __html: embedCode,
          }}
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "embed",
            locale: lang,
          })}
        />
      </Container>
    </Box>
  );
};
