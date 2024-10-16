import React, { useEffect, useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import "./Toolbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../ToolTip/ToolTip";
import ToolbarButtons from "./ToolbarButtons";

const initialX = window.innerWidth * 0.05;
const initialY = window.innerHeight * 0.6;

const Toolbar: React.FC = () => {
  const { editor } = useCurrentEditor();
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  if (!editor) return null;

  return (
    <div
      className="menu-bar"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <Tooltip tooltipText="Drag">
        <div className="drag-handle">::::</div>
      </Tooltip>
      <div className="menu-options">
        {ToolbarButtons(editor).map((button, index) => (
          <Tooltip key={index} tooltipText={button.tooltip}>
            <button
              onClick={button.command}
              disabled={button.isDisabled}
              className={button.isActive ? "is-active" : ""}
            >
              <FontAwesomeIcon icon={button.icon} />
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
