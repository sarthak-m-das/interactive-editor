import React, { useEffect, useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import "./MenuBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faCircleCheck,
  faCode,
  faItalic,
  faList,
  faList12,
  faParagraph,
  faQuoteLeft,
  faRedo,
  faRulerHorizontal,
  faStrikethrough,
  faTurnDown,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../ToolTip/ToolTip";

const initialX = window.innerWidth - 40 - 9 * (window.innerWidth / 100) - 20;
const initialY = window.innerHeight - 520;

const MenuBar: React.FC = () => {
  const { editor } = useCurrentEditor();
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  if (!editor) {
    return null;
  }

  return (
    <div
      className="menu-bar"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="drag-handle" onMouseDown={handleMouseDown}>
        ::::
      </div>
      <div className="menu-options">
        <Tooltip tooltipText="Bold">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faBold} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Italic">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faItalic} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Strike Through">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Code">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faCode} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Clear Marks">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .unsetAllMarks()
                .run()
            }
          >
            clear marks
          </button>
        </Tooltip>
        <Tooltip tooltipText="Clear Nodes">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .clearNodes()
                .run()
            }
          >
            clear nodes
          </button>
        </Tooltip>
        <Tooltip tooltipText="Paragraph">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setParagraph()
                .run()
            }
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faParagraph} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="H1">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 1 })
                .run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            H1
          </button>
        </Tooltip>
        <Tooltip tooltipText="H2">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 2 })
                .run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            H2
          </button>
        </Tooltip>
        <Tooltip tooltipText="H3">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: 3 })
                .run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            H3
          </button>
        </Tooltip>
        <Tooltip tooltipText="Bullet List">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleBulletList()
                .run()
            }
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Numbered List">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleOrderedList()
                .run()
            }
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faList12} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Code Block">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleCodeBlock()
                .run()
            }
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faCode} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Block Quotes">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleBlockquote()
                .run()
            }
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faQuoteLeft} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Horizontal Rule">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setHorizontalRule()
                .run()
            }
          >
            <FontAwesomeIcon icon={faRulerHorizontal} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Next Line">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setHardBreak()
                .run()
            }
          >
            <FontAwesomeIcon icon={faTurnDown} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Undo">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .undo()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .undo()
                .run()
            }
          >
            <FontAwesomeIcon icon={faUndo} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Redo">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .redo()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .redo()
                .run()
            }
          >
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </Tooltip>
        <Tooltip tooltipText="Highlight">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setColor("#958DF1")
                .run()
            }
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }
          >
            Purple
          </button>
        </Tooltip>
        <Tooltip tooltipText="Multiple Choice">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setMultipleChoice()
                .run()
            }
            disabled={
              !editor
                .can()
                .chain()
                .focus()
                .setMultipleChoice()
                .run()
            }
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default MenuBar;