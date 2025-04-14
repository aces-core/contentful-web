import { componentSpacing, palette } from "@aces/theme";
import { Box, Container, FlexBox, Icon, Skeleton } from "@aces/ui";

export const AccordionsSkeleton = () => {
  return (
    <Container>
      <Box marginY={{ xs: componentSpacing.md, md: componentSpacing.lg }}>
        <FlexBox
          justifyContent="flex-end"
          alignItems="center"
          marginY={2}
          style={{ height: "80px", position: "relative" }}
        >
          <Skeleton
            height="100%"
            width="100%"
            style={{
              position: "absolute",
            }}
          />
          <Icon
            icon="ExpandMore"
            size={24}
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "24px",
            }}
            color={palette.grey[400]}
          />
        </FlexBox>
        <FlexBox
          justifyContent="flex-end"
          alignItems="center"
          marginY={2}
          style={{ height: "80px", position: "relative" }}
        >
          <Skeleton
            height="100%"
            width="100%"
            style={{
              position: "absolute",
            }}
          />
          <Icon
            icon="ExpandMore"
            size={24}
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "24px",
            }}
            color={palette.grey[400]}
          />
        </FlexBox>
        <FlexBox
          justifyContent="flex-end"
          alignItems="center"
          marginY={2}
          style={{ height: "80px", position: "relative" }}
        >
          <Skeleton
            height="100%"
            width="100%"
            style={{
              position: "absolute",
            }}
          />
          <Icon
            icon="ExpandMore"
            size={24}
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "24px",
            }}
            color={palette.grey[400]}
          />
        </FlexBox>
      </Box>
    </Container>
  );
};
