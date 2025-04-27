import React from "react";

import { FlexBox, Icon, IconButton, LinkWrapper } from "@aces/ui";

interface SocialShareToolbarProps {
  url: string;
  text?: string;
  hideFacebook?: boolean;
  hideXTwitter?: boolean;
  hideLinkedin?: boolean;
}

export const SocialShareToolbar = ({
  url,
  text = "",
  hideFacebook = false,
  hideXTwitter = false,
  hideLinkedin = false,
}: SocialShareToolbarProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  if (hideFacebook && hideXTwitter && hideLinkedin) return null;

  return (
    <FlexBox
      flexDirection={{ xs: "row", lg: "column" }}
      alignItems={"flex-start"}
      gap={3}
    >
      {!hideFacebook && (
        <LinkWrapper
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton variant="outlined" color="light">
            <Icon icon="Facebook" />
          </IconButton>
        </LinkWrapper>
      )}
      {!hideXTwitter && (
        <LinkWrapper
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton variant="outlined" color="light">
            <FlexBox padding={"2px"}>
              <Icon icon="X" size={24} />
            </FlexBox>
          </IconButton>
        </LinkWrapper>
      )}
      {!hideLinkedin && (
        <LinkWrapper
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton variant="outlined" color="light">
            <Icon icon="LinkedIn" />
          </IconButton>
        </LinkWrapper>
      )}
    </FlexBox>
  );
};
