import * as React from "react";

export const InfoBoxStoryContainer = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ccc" }}>
      {children}
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "1.5rem 0" }}>
        <p>Sample Page Content</p>
      </div>
    </div>
  );
};

export default InfoBoxStoryContainer;
