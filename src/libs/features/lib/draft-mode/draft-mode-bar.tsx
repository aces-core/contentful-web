import { CfLinkTypes } from "@aces/types";
import { Box, Button, Container, Text } from "@aces/ui";
import { CfLink } from "@aces/cf";

export const DraftModeBar = () => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container>
        <Box
          style={{
            alignItems: "center",
            backgroundColor: "grey.200",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
            borderRadius: "0.25rem",
            display: "flex",
            paddingY: 3,
            paddingLeft: 5,
          }}
        >
          <Text.Small
            style={{
              borderRight: "1px solid",
              borderColor: "grey.400",
              paddingRight: 2,
            }}
          >
            <strong>Draft Mode</strong>
          </Text.Small>
          <CfLink
            linkType={CfLinkTypes.CustomLink}
            target="_self"
            pageLink={undefined}
            customLink="/api/disable-draft"
          >
            <Button>
              <Text.Small>Exit Draft Mode</Text.Small>
            </Button>
          </CfLink>
        </Box>
      </Container>
    </Box>
  );
};
