import { FormSkeleton } from "@aces/features";
import { componentSpacing } from "@aces/theme";
import { Container, FlexBox, Skeleton } from "@aces/ui";

export const CfFormSkeleton = () => {
  return (
    <Container>
      <FlexBox marginY={{ xs: componentSpacing.md, md: componentSpacing.xl }}>
        <FlexBox style={{ flex: 1 }}>
          <Skeleton width={"100%"} height={"100%"} />
        </FlexBox>
        <FlexBox style={{ flex: 1 }} padding={8}>
          <FormSkeleton />
        </FlexBox>
      </FlexBox>
    </Container>
  );
};
