import { ContentfulLivePreview } from "@contentful/live-preview";

import { Locale } from "@aces/i18n";
import { CfBaseComponent, CfTeamMember } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing, shape } from "@aces/theme";
import { Box, Col, Container, H3, Row, Text } from "@aces/ui";

import { CfImageCoverServer } from "../cf-image";
import { CfRichTextRender } from "../cf-rich-text-render";

export interface CfTeamListingProps extends CfBaseComponent {
  headline?: string;
  teamMembersCollection: {
    items: CfTeamMember[];
  };
}

export interface CfTeamMemberItemProps extends CfTeamMember {
  lang: Locale;
  preview: boolean;
}

export const CfTeamListing = ({
  internalTitle,
  headline,
  teamMembersCollection,
  __typename,
  id,
  lang,
  preview,
}: CfTeamListingProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}
    >
      <Container>
        <H3
          {...ContentfulLivePreview.getProps({
            entryId: id,
            fieldId: "headline",
            locale: lang,
          })}
        >
          {headline}
        </H3>
        {teamMembersCollection.items.map((item) => (
          <CfTeamMemberItem
            key={generateId(item.name)}
            name={item.name}
            role={item.role}
            bio={item.bio}
            profileImage={item.profileImage}
            lang={lang}
            preview={preview}
          />
        ))}
      </Container>
    </Box>
  );
};

export const CfTeamMemberItem = ({
  name,
  role,
  bio,
  profileImage,
  lang,
  preview,
}: CfTeamMemberItemProps) => {
  return (
    <Row columnSpacing={10} rowSpacing={8} marginY={{ xs: 10, md: 20 }}>
      <Col size={{ xs: 12, sm: 4 }}>
        <CfImageCoverServer
          id={profileImage?.sys?.id || ""}
          preview={preview}
          lang={lang}
          coverWidth={"100%"}
          coverHeight={{ xs: "440px", md: "410px" }}
          borderRadius={shape.borderRadius}
          nested={true}
        />
      </Col>
      <Col size={{ xs: 12, sm: 8 }}>
        <Text style={{ fontSize: "30px" }} marginBottom={5}>
          {name}
        </Text>
        {role && (
          <Text.SubtitleSmall marginBottom={5}>{role}</Text.SubtitleSmall>
        )}
        {bio && (
          <CfRichTextRender
            richTextDocument={bio.json}
            preview={preview}
            lang={lang}
          />
        )}
      </Col>
    </Row>
  );
};
