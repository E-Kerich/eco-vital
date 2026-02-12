import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import api from "../../api/axios";
import { 
  Bold, 
  Italic, 
  Heading2, 
  List, 
  Link, 
  Quote,
  Image as ImageIcon,
  Undo,
  Redo,
  Code,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";

export default function RichTextEditor({ value, onChange, placeholder = "Write your article here…" }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),

        Image,
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4",
      },
    },
  });


  // Handle image upload from local files
    

  // Sync editor when editing existing blog
  useEffect(() => {
    if (editor && value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="border border-gray-800 rounded-lg bg-gray-900 min-h-[300px] animate-pulse" />
    );
  }

  return (
    <div className="border border-gray-800 rounded-lg bg-gray-900 overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-800 p-3 bg-gray-900">
        {/* Text formatting */}
        <div className="flex items-center border-r border-gray-800 pr-3 mr-2">
          <ToolbarButton
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
            icon={<Bold className="w-4 h-4" />}
            title="Bold"
          />
          <ToolbarButton
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            icon={<Italic className="w-4 h-4" />}
            title="Italic"
          />
          <ToolbarButton
            active={editor.isActive("code")}
            onClick={() => editor.chain().focus().toggleCode().run()}
            icon={<Code className="w-4 h-4" />}
            title="Code"
          />
        </div>

        {/* Headings */}
        <div className="flex items-center border-r border-gray-800 pr-3 mr-2">
          <ToolbarButton
            active={editor.isActive("heading", { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            icon={<Heading2 className="w-4 h-4" />}
            title="Heading 2"
          />
          <ToolbarButton
            active={editor.isActive("heading", { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            label="H3"
            title="Heading 3"
          />
          <ToolbarButton
            active={editor.isActive("heading", { level: 4 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            label="H4"
            title="Heading 4"
          />
        </div>

        {/* Lists */}
        <div className="flex items-center border-r border-gray-800 pr-3 mr-2">
          <ToolbarButton
            active={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            icon={<List className="w-4 h-4" />}
            title="Bullet List"
          />
          <ToolbarButton
            active={editor.isActive("orderedList")}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            label="1."
            title="Numbered List"
          />
        </div>

        <input
        type="file"
        accept="image/*"
        hidden
        id="editor-image-upload"
        onChange={async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("image", file);

            const res = await api.post("/uploads/image", formData);
            editor.chain().focus().setImage({ src: res.data.url }).run();

            e.target.value = "";
        }}
        />

        <ToolbarButton
            label="Image"
            onClick={() =>
                document.getElementById("editor-image-upload").click()
            }
            title="Upload Image"
            icon={<ImageIcon className="w-4 h-4" />}

            />

        {/* Alignment */}
        <div className="flex items-center border-r border-gray-800 pr-3 mr-2">
          <ToolbarButton
            active={editor.isActive({ textAlign: 'left' })}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            icon={<AlignLeft className="w-4 h-4" />}
            title="Align Left"
          />
          <ToolbarButton
            active={editor.isActive({ textAlign: 'center' })}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            icon={<AlignCenter className="w-4 h-4" />}
            title="Align Center"
          />
          <ToolbarButton
            active={editor.isActive({ textAlign: 'right' })}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            icon={<AlignRight className="w-4 h-4" />}
            title="Align Right"
          />
        </div>

        {/* Other formatting */}
        <div className="flex items-center border-r border-gray-800 pr-3 mr-2">
          <ToolbarButton
            active={editor.isActive("blockquote")}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            icon={<Quote className="w-4 h-4" />}
            title="Blockquote"
          />
          <ToolbarButton
            onClick={() => {
              const url = window.prompt('URL');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            icon={<Link className="w-4 h-4" />}
            title="Add Link"
          />
          <ToolbarButton
            onClick={() => {
              const url = window.prompt('Image URL');
              if (url) {
                editor.chain().focus().setImage({ src: url }).run();
              }
            }}
            icon={<ImageIcon className="w-4 h-4" />}
            title="Add Image"
          />
        </div>

        {/* Undo/Redo */}
        <div className="flex items-center">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            icon={<Undo className="w-4 h-4" />}
            title="Undo"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            icon={<Redo className="w-4 h-4" />}
            title="Redo"
          />
        </div>
      </div>

      {/* Editor */}
      <div className="bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Character count */}
      <div className="border-t border-gray-800 p-3 bg-gray-900">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            {editor.storage.characterCount?.characters() || 0} characters
            {" • "}
            {editor.storage.characterCount?.words() || 0} words
          </span>
          <div className="flex items-center gap-4">
            <span className={`text-xs px-2 py-1 rounded ${
              (editor.storage.characterCount?.characters() || 0) > 1000 
                ? 'text-emerald-400 bg-emerald-900/20' 
                : 'text-amber-400 bg-amber-900/20'
            }`}>
              {(editor.storage.characterCount?.characters() || 0) > 1000 ? '✓ Good length' : 'Add more content'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolbarButton({ icon, label, onClick, active, disabled, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        w-8 h-8 flex items-center justify-center rounded
        transition-all duration-200
        ${active 
          ? 'bg-emerald-900 text-emerald-400' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {icon || (
        <span className="text-sm font-medium">{label}</span>
      )}
    </button>
  );
}