import { generateId } from "@aces/utils";
import { Box, Icon, Link } from "@aces/ui";
export interface SocialsProps {
  facebook?: string;
  xTwitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export const Socials = ({
  facebook,
  xTwitter,
  instagram,
  linkedin,
  youtube,
}: SocialsProps) => {
  return (
    <Box
      id={generateId("socials")}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {facebook && (
        <Link href={facebook} aria-label="Facebook" target="_blank">
          <Icon icon="Facebook" size="1.5rem" />
        </Link>
      )}
      {xTwitter && (
        <Link href={xTwitter} aria-label=" Twitter" target="_blank">
          <Icon icon="X" size="1.3rem" />
        </Link>
      )}
      {instagram && (
        <Link href={instagram} aria-label="Instagram" target="_blank">
          <Icon icon="Instagram" size="1.35rem" />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} aria-label="Linkedin" target="_blank">
          <Icon icon="LinkedIn" size="1.4rem" />
        </Link>
      )}
      {youtube && (
        <Link href={youtube} aria-label="Youtube" target="_blank">
          <Icon icon="YouTube" size="1.6rem" />
        </Link>
      )}
    </Box>
  );
};
