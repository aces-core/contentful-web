import { CfImageProps, ResponsiveSpacing } from "@aces/types";
import { palette } from "@aces/theme";
import { Avatar, FlexBox, H5, Text } from "@aces/ui";

export interface AuthorBlockProps {
  name: string;
  profileImage?: CfImageProps;
  role?: string;
  description?: string;
  maxWidth?: ResponsiveSpacing;
  showAvatar?: boolean;
  showDescription?: boolean;
}

export const AuthorBlock = ({
  profileImage,
  name,
  role,
  description,
  maxWidth = 480,
  showAvatar = true,
  showDescription = false,
}: AuthorBlockProps) => {
  const avatarSize = 100;

  return (
    <FlexBox flexDirection="column" alignItems="center">
      {showAvatar && (
        <>
          {profileImage ? (
            <Avatar
              image={profileImage.image.url}
              size={avatarSize}
              alt={profileImage.altText}
            />
          ) : (
            <Avatar size={avatarSize} />
          )}
        </>
      )}
      <H5 marginTop={4} marginBottom={2}>
        {name}
      </H5>
      {role && (
        <Text align="center" color={palette.grey[500]} variant="subtitle1">
          {role}
        </Text>
      )}
      {showDescription && description && (
        <Text
          align="center"
          color={palette.common.black}
          marginTop={4}
          style={{
            maxWidth: maxWidth,
          }}
        >
          {description}
        </Text>
      )}
    </FlexBox>
  );
};

export interface AuthorBlockSmallProps {
  name: string;
  profileImage?: CfImageProps;
}

export const AuthorBlockSmall = ({
  profileImage,
  name,
}: AuthorBlockSmallProps) => {
  const avatarSize = 40;

  return (
    <FlexBox alignItems="center" marginBottom={{ xs: 4, md: 0 }}>
      {profileImage ? (
        <Avatar
          image={profileImage.image.url}
          size={avatarSize}
          alt={profileImage.altText}
        />
      ) : (
        <Avatar size={avatarSize} />
      )}
      <Text.Small style={{ marginLeft: 4 }}>{name}</Text.Small>
    </FlexBox>
  );
};
