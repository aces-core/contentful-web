import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, RouteDirectory } from "@aces/types";
import { currentYear } from "@aces/utils";
import { Col, Container, FlexBox, Link, Row, Text } from "@aces/ui";

import { FooterNavigation, PrivacyNavigation } from "../../navigations";
import { Logo, LogosType } from "../logo/render";
import { Socials } from "../socials/render";

interface FooterProps
  extends Omit<CfBaseComponent, "internalTitle" | "__typename"> {
  logos: LogosType;
  navigations: {
    footerNavigation: [];
    privacyNavigation: [];
  };
  copyright?: string;
  socials?: {
    facebook?: string;
    xTwitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export const Footer = ({
  logos,
  navigations,
  copyright,
  socials,
  id,
  preview,
  lang,
}: FooterProps) => {
  return (
    <FlexBox
      component="footer"
      paddingY={{ xs: 8, md: 10 }}
      style={{
        backgroundColor: "common.white",
        width: "100%",
      }}
    >
      <Container>
        <Row alignItems="center">
          <Col size={{ xs: 12, md: 4 }}>
            <FlexBox
              justifyContent={{ xs: "center", md: "flex-start" }}
              marginBottom={{ xs: 4, md: 0 }}
            >
              <Link href={RouteDirectory.Homepage}>
                <Logo
                  logos={logos}
                  variant="fullColorLogo"
                  width={{ xs: 120, md: 140 }}
                  preview={preview}
                  lang={lang}
                />
              </Link>
            </FlexBox>
          </Col>
          <Col size={{ xs: 12, md: 8 }}>
            <FooterNavigation
              data={navigations.footerNavigation}
              id={id}
              lang={lang}
            />
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <FlexBox
              justifyContent={{ xs: "center", md: "flex-start" }}
              marginTop={{ xs: 8, md: 0 }}
              {...ContentfulLivePreview.getProps({
                entryId: id,
                fieldId: "facebook",
                locale: lang,
              })}
            >
              <Socials
                facebook={socials?.facebook}
                xTwitter={socials?.xTwitter}
                instagram={socials?.instagram}
                linkedin={socials?.linkedin}
                youtube={socials?.youtube}
              />
            </FlexBox>
          </Col>
        </Row>
        <Row marginTop={8} flexDirection={{ xs: "column-reverse", md: "row" }}>
          <Col size={{ xs: 12, md: 4 }}>
            <Text.ExtraSmall
              style={{
                textAlign: { xs: "center", md: "left" },
                marginTop: { xs: 4, md: 0 },
              }}
              {...ContentfulLivePreview.getProps({
                entryId: id,
                fieldId: "copyrightText",
                locale: lang,
              })}
            >{`© ${currentYear()}${copyright ? ` ${copyright}` : ""}`}</Text.ExtraSmall>
          </Col>
          <Col size={{ xs: 12, md: 8 }}>
            <PrivacyNavigation
              data={navigations.privacyNavigation}
              id={id}
              lang={lang}
            />
          </Col>
        </Row>
      </Container>
    </FlexBox>
  );
};
