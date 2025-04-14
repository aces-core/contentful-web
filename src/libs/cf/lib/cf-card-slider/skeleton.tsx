import { Col, FlexBox, Row, Skeleton } from "@aces/ui";
import { CardSkeleton } from "../cf-card/skeleton";
import { ButtonSkeleton } from "../cf-button/skeleton";
import { componentSpacing } from "@aces/theme";

export const CardSliderSkeleton = () => {
  return (
    <Row marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}>
      <Col size={{ xs: 12, md: 4 }}>
        <FlexBox
          flexDirection={"column"}
          padding={4}
          style={{
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Skeleton variant="text" width="300px" style={{ marginBottom: 2 }} />
          <Skeleton variant="text" width="200px" style={{ marginBottom: 6 }} />
          <ButtonSkeleton />
        </FlexBox>
      </Col>
      <Col size={{ xs: 12, md: 8 }}>
        <Row columnSpacing={4} rowSpacing={4}>
          <Col size={{ xs: 12, md: 4 }}>
            <CardSkeleton />
          </Col>
          <Col size={{ xs: 12, md: 4 }}>
            <CardSkeleton />
          </Col>
          <Col size={{ xs: 12, md: 4 }}>
            <CardSkeleton />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
