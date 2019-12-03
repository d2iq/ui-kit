import * as React from "react";
import { sectionLoadingWrapper, sectionLoadingIndicator } from "../style";

const SectionLoadingIndicator: React.SFC = () => (
  <div className={sectionLoadingWrapper}>
    <div
      className={sectionLoadingIndicator}
      data-cy="sectionLoadingIndicator"
    />
  </div>
);

export default SectionLoadingIndicator;
