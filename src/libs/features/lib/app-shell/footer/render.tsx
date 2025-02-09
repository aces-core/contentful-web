import { RouteDirectory } from "@maverick/types";
import { currentYear } from "@maverick/utils";
import { Col, Container, FlexBox, Link, Row, Text } from "@maverick/ui";

import { FooterNavigation, PrivacyNavigation } from "../../navigations";
import { Logo, LogosType } from "../logo/render";
import { Socials } from "../socials/render";

interface FooterProps {
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
  preview: boolean;
  lang: string;
}

export const Footer = ({
  logos,
  navigations,
  copyright,
  socials,
  preview,
  lang,
}: FooterProps) => {
  return (
    <FlexBox
      component="footer"
      paddingY={{ xs: 6, md: 10 }}
      style={{
        backgroundColor: "common.white",
        width: "100%",
      }}
    >
      <Container>
        <Row alignItems="center">
          <Col size={{ xs: 12, md: 4 }}>
            <Link href={RouteDirectory.Homepage}>
              <Logo
                logos={logos}
                variant="fullColorLogo"
                width={{ xs: 120, md: 140 }}
                preview={preview}
                lang={lang}
              />
            </Link>
          </Col>
          <Col size={{ xs: 12, md: 8 }}>
            <FooterNavigation data={navigations.footerNavigation} lang={lang} />
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <Socials
              facebook={socials?.facebook}
              xTwitter={socials?.xTwitter}
              instagram={socials?.instagram}
              linkedin={socials?.linkedin}
              youtube={socials?.youtube}
            />
          </Col>
        </Row>
        <Row marginTop={8}>
          <Col size={{ xs: 12, md: 4 }}>
            <Text.ExtraSmall>{`© ${currentYear()} ${copyright}`}</Text.ExtraSmall>
          </Col>
          <Col size={{ xs: 12, md: 8 }}>
            <PrivacyNavigation
              data={navigations.privacyNavigation}
              lang={lang}
            />
          </Col>
        </Row>
      </Container>
    </FlexBox>
  );
};
