import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfImageProps,
  CfRichText,
  ImageSize,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { Box, Card, H4 } from "@maverick/ui";

import { CfRichTextRender } from "../cf-rich-text-render";

export enum CardTypes {
  Default = "Default",
  Borderless = "Borderless",
}

export interface CfCardProps extends CfBaseComponent {
  cardType: CardTypes;
  headline?: string;
  bodyCopy?: CfRichText;
  image?: CfImageProps;
  imageSize: ImageSize;
  preview: boolean;
}

export const CfCard = ({
  internalTitle,
  headline,
  bodyCopy,
  image,
  imageSize,
  cardType,
  __typename,
  id,
  lang,
  preview,
}: CfCardProps) => {
  const isDefault = cardType === "Default";
  return (
    <Box id={generateId(internalTitle)} data-component={__typename}>
      <Card raised={isDefault}>
        {image && (
          <Card.Media
            component="img"
            image={image.image.url}
            alt={image.altText}
            imageSize={imageSize}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        )}
        <Card.Content
          style={{
            padding: isDefault ? "1rem" : 0,
            paddingTop: image ? "1rem" : 0,
          }}
        >
          {headline && (
            <H4
              component="h3"
              marginBottom={2}
              {...ContentfulLivePreview.getProps({
                entryId: id,
                fieldId: "headline",
                locale: lang,
              })}
            >
              {headline}
            </H4>
          )}
          {bodyCopy && (
            <CfRichTextRender
              richTextDocument={bodyCopy.json}
              alignment="Left"
              lang={lang}
              preview={preview}
              {...ContentfulLivePreview.getProps({
                entryId: id,
                fieldId: "bodyCopy",
                locale: lang,
              })}
            />
          )}
        </Card.Content>
      </Card>
    </Box>
  );
};
