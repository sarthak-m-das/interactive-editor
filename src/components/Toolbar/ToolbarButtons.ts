import { fa2, fa3, faBold, faCircleCheck, faCode, faHeading, faItalic, faList, faList12, faMarker, faParagraph, faQuoteLeft, faRedo, faRulerHorizontal, faStrikethrough, faTurnDown, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@tiptap/core";

const ToolbarButtons = (editor: Editor) => {
    return [
    { icon: faBold, tooltip: "Bold", command: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive("bold"), isDisabled: !editor.can().chain().focus().toggleBold().run() },
    { icon: faItalic, tooltip: "Italic", command: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive("italic"), isDisabled: !editor.can().chain().focus().toggleItalic().run() },
    { icon: faStrikethrough, tooltip: "Strike Through", command: () => editor.chain().focus().toggleStrike().run(), isActive: editor.isActive("strike"), isDisabled: !editor.can().chain().focus().toggleStrike().run() },
    { icon: faCode, tooltip: "Code", command: () => editor.chain().focus().toggleCode().run(), isActive: editor.isActive("code"), isDisabled: !editor.can().chain().focus().toggleCode().run() },
    { icon: faParagraph, tooltip: "Paragraph", command: () => editor.chain().focus().setParagraph().run(), isActive: editor.isActive("paragraph") },
    { icon: faHeading, tooltip: "H1", command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), isActive: editor.isActive("heading", { level: 1 }) },
    { icon: fa2, tooltip: "H2", command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), isActive: editor.isActive("heading", { level: 2 }) },
    { icon: fa3, tooltip: "H3", command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), isActive: editor.isActive("heading", { level: 3 }) },
    { icon: faList, tooltip: "Bullet List", command: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive("bulletList") },
    { icon: faList12, tooltip: "Numbered List", command: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive("orderedList") },
    { icon: faRulerHorizontal, tooltip: "Horizontal Rule", command: () => editor.chain().focus().setHorizontalRule().run() },
    { icon: faTurnDown, tooltip: "Next Line", command: () => editor.chain().focus().setHardBreak().run() },
    { icon: faUndo, tooltip: "Undo", command: () => editor.chain().focus().undo().run(), isDisabled: !editor.can().chain().focus().undo().run() },
    { icon: faRedo, tooltip: "Redo", command: () => editor.chain().focus().redo().run(), isDisabled: !editor.can().chain().focus().redo().run() },
    { icon: faMarker, tooltip: "Highlight", command: () => editor.chain().focus().setColor("#958DF1").run(), isActive: editor.isActive("textStyle", { color: "#958DF1" }) },
    { icon: faQuoteLeft, tooltip: "Block Quotes", command: () => editor.chain().focus().toggleBlockquote().run(), isActive: editor.isActive("blockquote") },
    { icon: faCircleCheck, tooltip: "Multiple Choice", command: () => editor.chain().focus().setMultipleChoice().run(), isDisabled: !editor.can().chain().focus().setMultipleChoice().run() }
  ];
}

export default ToolbarButtons;
