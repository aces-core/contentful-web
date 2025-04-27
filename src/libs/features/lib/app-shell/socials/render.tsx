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
        gap: 4,
      }}
      marginY={{ xs: 2, md: 0 }}
    >
      {facebook && (
        <Link href={facebook} aria-label="Facebook" target="_blank">
          <Icon icon="Facebook" size={30} />
        </Link>
      )}
      {xTwitter && (
        <Link href={xTwitter} aria-label=" Twitter" target="_blank">
          <Icon icon="X" size={30} />
        </Link>
      )}
      {instagram && (
        <Link href={instagram} aria-label="Instagram" target="_blank">
          <Icon icon="Instagram" size={30} />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} aria-label="Linkedin" target="_blank">
          <Icon icon="LinkedIn" size={30} />
        </Link>
      )}
      {youtube && (
        <Link href={youtube} aria-label="Youtube" target="_blank">
          <Icon icon="YouTube" size={32} />
        </Link>
      )}
    </Box>
  );
};
