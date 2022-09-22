import * as React from "react";

import ConfigurationMapSection from "./ConfigurationMapSection";
import ConfigurationMapHeading, {
  HeadingLevel
} from "./ConfigurationMapHeading";
import ConfigurationMapRow from "./ConfigurationMapRow";
import ConfigurationMapLabel from "./ConfigurationMapLabel";
import ConfigurationMapValue from "./ConfigurationMapValue";

type Hash = {
  [key: string]: React.ReactNode | Hash;
};

interface HashMapProps {
  /**
   * Content to render if no value is available
   */
  defaultValue?: string;
  /**
   * The data to render. Keys are rendered as labels, values are rendered as the value
   */
  hash: Hash;
  /**
   * Priority of the heading that the `headline` prop renders in. Numbers map to <h1> through <h6>
   */
  headingLevel?: HeadingLevel;
  /**
   * The heading that labels the data
   */
  headline?: React.ReactNode;
  /**
   * Optional object with keys consisting of keys in the `hash` prop to be replaced, and with corresponding values of the replacement to be rendered.
   */
  renderKeys?: { [key: string]: string };
}

function isHashMap(value) {
  // Check whether we are trying to render an object that is not a
  // React component

  return (
    typeof value === "object" &&
    !Array.isArray(value) &&
    value !== null &&
    !React.isValidElement(value)
  );
}

function formatValue(value, defaultValue) {
  if (typeof value === "boolean") {
    value = value.toString();
  }

  if (Array.isArray(value)) {
    value = value.join(", ");
  }

  if (!value && defaultValue) {
    value = defaultValue;
  }

  return value;
}

const HashMap = React.memo(
  ({
    hash,
    headline,
    headingLevel = 1,
    renderKeys,
    defaultValue = "-"
  }: HashMapProps) => {
    if (!hash || Object.keys(hash).length === 0) {
      return null;
    }

    return (
      <ConfigurationMapSection>
        {headline && (
          <ConfigurationMapHeading headingLevel={headingLevel}>
            {headline}
          </ConfigurationMapHeading>
        )}
        {Object.entries(hash).map(([key, value]) => {
          if (value && isHashMap(value)) {
            return (
              <HashMap
                hash={value as Hash}
                headingLevel={Math.min(headingLevel + 1, 6) as HeadingLevel}
                key={`hash-map-${key}`}
                headline={key}
              />
            );
          }

          // I think this is verifying that it is an object
          if (
            renderKeys &&
            Object.prototype.hasOwnProperty.call(renderKeys, key)
          ) {
            key = renderKeys[key];
          }

          return (
            <ConfigurationMapRow key={`hash-map-value-${key}`}>
              <ConfigurationMapLabel>{key}</ConfigurationMapLabel>
              <ConfigurationMapValue>
                {formatValue(value, defaultValue)}
              </ConfigurationMapValue>
            </ConfigurationMapRow>
          );
        })}
      </ConfigurationMapSection>
    );
  }
);

export default HashMap;
