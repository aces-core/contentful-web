import { Locale } from "@maverick/i18n";
import { CfImage, RouteDirectory } from "@maverick/types";
import { formatDate } from "@maverick/utils";
import { Avatar, Card, FlexBox, H4, LinkWrapper, Text } from "@maverick/ui";

export interface ArticleCardProps {
  featuredImage: CfImage;
  title: string;
  author: {
    name: string;
    profileImage: CfImage;
  };
  publishDate: string;
  mediaHeight?: number;
  slug: string;
  lang: Locale;
}

export const ArticleCard = ({
  featuredImage,
  title,
  author,
  publishDate,
  mediaHeight = 400,
  slug,
  lang,
}: ArticleCardProps) => {
  return (
    <LinkWrapper href={`${RouteDirectory.Articles}/${slug}`} passHref>
      <Card borderRadius="12px">
        <Card.ActionArea>
          <Card.Media
            imageSize="fill"
            alt={featuredImage.altText}
            image={featuredImage.image.url}
            height={mediaHeight}
          />
          <Card.Content marginX={4} marginY={4}>
            <H4 component="p" marginBottom={12}>
              {title}
            </H4>
            <FlexBox alignItems="center" justifyContent="space-between">
              <FlexBox alignItems="center">
                <Avatar
                  image={author.profileImage.image.url}
                  size={48}
                  alt={author.profileImage.altText}
                />
                <Text.Small style={{ marginLeft: 5 }}>{author.name}</Text.Small>
              </FlexBox>
              <Text.Small>{formatDate(publishDate, lang)}</Text.Small>
            </FlexBox>
          </Card.Content>
        </Card.ActionArea>
      </Card>
    </LinkWrapper>
  );
};
