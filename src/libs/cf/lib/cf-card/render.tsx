import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfImageProps,
  CfRichText,
  ImageSize,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { Card, H4 } from "@maverick/ui";

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
  fullHeight?: boolean;
}

export const CfCard = ({
  internalTitle,
  headline,
  bodyCopy,
  image,
  imageSize,
  fullHeight,
  cardType,
  __typename,
  id,
  lang,
  preview,
}: CfCardProps) => {
  const isDefault = cardType === "Default";

  return (
    <Card
      id={generateId(internalTitle)}
      data-component={__typename}
      raised={isDefault}
      fullHeight={fullHeight}
    >
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
      <Card.Content paddingX={6} paddingY={6}>
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
  );
};
