import { CfLinkTypes } from "@maverick/types";
import { Box, Container, Menu, MenuItem, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

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
            paddingY: 1,
            paddingX: 5,
          }}
        >
          <Text.Small
            style={{
              borderRight: "1px solid",
              borderColor: "grey.400",
              paddingRight: 2,
              marginRight: 2,
            }}
          >
            <strong>Draft Mode</strong>
          </Text.Small>
          <Menu>
            <MenuItem>
              <CfLink
                linkType={CfLinkTypes.CustomLink}
                target="_self"
                pageLink={undefined}
                customLink="/api/disable-draft"
              >
                <Text.Small>Exit Draft Mode</Text.Small>
              </CfLink>
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};
