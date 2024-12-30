import { breakpoints } from "@maverick/theme";
import { Box, Container, FlexBox } from "@maverick/ui";

export const Header = ({ translations }: any) => {
  return (
    <>
      <Box style={{ height: "5rem" }} />
      <FlexBox
        component="header"
        style={{
          backgroundColor: "common.white",
          position: "fixed",
          top: 0,
          width: "100%",
          transition: "box-shadow 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingY: { xs: "0.75rem", md: 0 },
            maxWidth: `${breakpoints.values.xxl}px !important`,
          }}
        >
          {translations.logo}
        </Container>
      </FlexBox>
    </>
  );
};
