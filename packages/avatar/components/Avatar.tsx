import * as React from "react";
import { avatarContainer, avatarSize, avatarImg } from "../style";
import {
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl
} from "../../design-tokens/build/js/designTokens";
import { cx } from "emotion";

export type AvatarSizes =
  | typeof iconSizeXs
  | typeof iconSizeS
  | typeof iconSizeM
  | typeof iconSizeL
  | typeof iconSizeXl;

export interface AvatarProps {
  /**
   * URL for the image displayed
   */
  src: string;
  /**
   * Text a screenreader will read aloud when it gets to the avatar
   */
  label?: string;
  /**
   * The width and height of the avatar
   */
  size?: AvatarSizes;
}

const Avatar: React.StatelessComponent<AvatarProps> = (props: AvatarProps) => {
  const { label, src, size = iconSizeM } = props;

  return (
    <div
      className={cx(avatarContainer, avatarSize(size))}
      role="img"
      aria-label={label}
    >
      {/*
          tslint:disable react-a11y-img-has-alt
          intententionally not setting "alt" so it doesn't appear in the avatar
          box when/if src is empty or a broken URL
        */}
      <img className={avatarImg} src={src} alt="" />
    </div>
  );
};

export default Avatar;
