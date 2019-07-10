import * as React from "react";

import ConfigurationMapSection from "./ConfigurationMapSection";
import ConfigurationMapHeading from "./ConfigurationMapHeading";
import ConfigurationMapRow from "./ConfigurationMapRow";
import ConfigurationMapLabel from "./ConfigurationMapLabel";
import ConfigurationMapValue from "./ConfigurationMapValue";

const METHODS_TO_BIND = ["formatValue", "isHashMap"];

type headingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HashMapProps {
  /**
   * Content to render if no value is available
   */
  defaultValue?: string;
  /**
   * The data to render. Keys are rendered as labels, values are rendered as the value
   */
  hash: { [key: string]: React.ReactNode };
  /**
   * Priority of the heading that the `headline` prop renders in. Numbers map to <h1> through <h6>
   */
  headingLevel?: headingLevel;
  /**
   * The heading that labels the data
   */
  headline?: React.ReactNode;
  /**
   * Optional object with keys consisting of keys in the `hash` prop to be replaced, and with corresponding values of the replacement to be rendered.
   */
  renderKeys?: { [key: string]: string };
}

class HashMap extends React.PureComponent<HashMapProps, {}> {
  public static defaultProps: Partial<HashMapProps> = {
    headingLevel: 1,
    defaultValue: "—"
  };

  constructor(props) {
    super(props);

    METHODS_TO_BIND.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  getHeadline() {
    const { headline, headingLevel } = this.props;
    if (!headline) {
      return null;
    }

    // Wrap in headline element and classes
    return (
      <ConfigurationMapHeading headingLevel={headingLevel}>
        {headline}
      </ConfigurationMapHeading>
    );
  }

  getHashMap(headline, hashMap) {
    // Increase the heading level for each nested description list,
    // ensuring we don't surpass heading level <h6/>.
    const headingLevel = this.props.headingLevel || 0;
    const nextHeadingLevel = Math.min(headingLevel + 1, 6) as headingLevel;

    return (
      <HashMap
        {...this.props}
        hash={hashMap}
        headingLevel={nextHeadingLevel}
        key={`hash-map-${headline}`}
        headline={headline}
      />
    );
  }

  getItems() {
    const { hash, renderKeys } = this.props;

    return Object.keys(hash).map(key => {
      const value = hash[key];

      if (this.isHashMap(value)) {
        return this.getHashMap(key, value);
      }

      if (renderKeys && Object.prototype.hasOwnProperty.call(renderKeys, key)) {
        key = renderKeys[key];
      }

      return (
        <ConfigurationMapRow key={`hash-map-value-${key}`}>
          <ConfigurationMapLabel>{key}</ConfigurationMapLabel>
          <ConfigurationMapValue>
            {this.formatValue(value)}
          </ConfigurationMapValue>
        </ConfigurationMapRow>
      );
    });
  }

  render() {
    const { hash } = this.props;

    if (!hash || Object.keys(hash).length === 0) {
      return null;
    }

    return (
      <ConfigurationMapSection>
        {this.getHeadline()}
        {this.getItems()}
      </ConfigurationMapSection>
    );
  }

  formatValue(value) {
    if (typeof value === "boolean") {
      value = value.toString();
    }

    if (Array.isArray(value)) {
      value = value.join(", ");
    }

    if (!value && this.props.defaultValue) {
      value = this.props.defaultValue;
    }

    return value;
  }

  isHashMap(value) {
    // Check whether we are trying to render an object that is not a
    // React component

    return (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null &&
      !React.isValidElement(value)
    );
  }
}

export default HashMap;
