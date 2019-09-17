import * as React from "react";
import { BadgeDatum } from "../../components/TextInputWithBadges";

interface RenderProps {
  badges: BadgeDatum[];
  badgeChangeHandler: (badges: BadgeDatum[]) => void;
}

interface TextInputWithBadgesStoryHelperProps {
  badges?: BadgeDatum[];
  children: (renderProps: RenderProps) => React.ReactNode;
}

interface TextInputWithBadgesStoryHelperState {
  badges: BadgeDatum[];
}

class TextInputWithBadgesStoryHelper extends React.PureComponent<
  TextInputWithBadgesStoryHelperProps,
  TextInputWithBadgesStoryHelperState
> {
  constructor(props) {
    super(props);

    this.badgeChangeHandler = this.badgeChangeHandler.bind(this);

    this.state = {
      badges: props.badges || []
    };
  }

  badgeChangeHandler(badges) {
    this.setState({ badges });
  }

  render() {
    return this.props.children({
      badges: this.state.badges,
      badgeChangeHandler: this.badgeChangeHandler
    });
  }
}

export default TextInputWithBadgesStoryHelper;
