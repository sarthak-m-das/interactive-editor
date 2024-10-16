import React, { useState } from "react";
import "./ToolTip.scss";

const Tooltip = ({ tooltipText, children }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      {children}
      {showTooltip && <div className="tooltip-box">{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;
