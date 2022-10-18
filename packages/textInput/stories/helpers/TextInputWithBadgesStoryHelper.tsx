import * as React from "react";
import { BadgeDatum } from "../../components/TextInputWithBadges";

interface RenderProps {
  badges: BadgeDatum[];
  badgeChangeHandler: (badges: BadgeDatum[]) => void;
}

interface TextInputWithBadgesStoryHelperProps {
  badges?: BadgeDatum[];
  children: (renderProps: RenderProps) => React.ReactElement;
}

const TextInputWithBadgesStoryHelper = (
  props: TextInputWithBadgesStoryHelperProps
) => {
  const [badges, setBadges] = React.useState<BadgeDatum[]>(props.badges || []);

  const handleBadgeChange = badgesNext => {
    setBadges(badgesNext);
  };

  return props.children({
    badges,
    badgeChangeHandler: handleBadgeChange
  });
};

export default React.memo(TextInputWithBadgesStoryHelper);
