import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, Nested } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Container } from "@aces/ui";

import style from "./style.module.css";

export interface CfVideoEmbedProps extends CfBaseComponent, Nested {
  embedCode: string;
}

export const CfVideoEmbed = ({
  internalTitle,
  embedCode,
  nested,
  __typename,
  id,
  lang,
}: CfVideoEmbedProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : 0,
        md: !nested ? componentSpacing.md : 0,
      }}
    >
      <Container nested={nested}>
        <div
          dangerouslySetInnerHTML={{
            __html: embedCode,
          }}
          className={style.videoEmbed}
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
