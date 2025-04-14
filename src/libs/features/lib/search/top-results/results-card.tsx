import { Card, H4 } from "@aces/ui";

interface ResultsCardProps {
  title: string;
}

export const ResultsCard = ({ title }: ResultsCardProps) => {
  return (
    <Card>
      <Card borderRadius="12px">
        <Card.ActionArea>
          <Card.Content paddingX={{ xs: 4, md: 8 }} paddingY={{ xs: 4, md: 8 }}>
            <H4 component="p" marginBottom={10}>
              {title}
            </H4>
          </Card.Content>
        </Card.ActionArea>
      </Card>
    </Card>
  );
};
