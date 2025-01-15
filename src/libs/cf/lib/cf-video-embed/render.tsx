import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container } from "@maverick/ui";

import style from "./style.module.css";

export interface CfVideoEmbedProps extends CfBaseComponent {
  embedCode: string;
  nested?: boolean;
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
        xs: !nested ? componentSpacing.xs : "",
        md: !nested ? componentSpacing.md : "",
      }}
    >
      <Container
        disableGutters={nested}
        noPadding={nested}
        maxWidth={nested ? false : "xl"}
      >
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
