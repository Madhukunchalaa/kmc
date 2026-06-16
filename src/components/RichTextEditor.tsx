'use client';

import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect } from 'react';

/* ── Toolbar button ── */
function Btn({
  onClick, active, title, children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      style={{
        background: active ? 'rgba(200,149,108,0.18)' : 'transparent',
        border: active ? '1px solid rgba(200,149,108,0.5)' : '1px solid transparent',
        borderRadius: 6,
        color: active ? '#A0622A' : '#4A3728',
        cursor: 'pointer',
        fontWeight: active ? 700 : 400,
        fontSize: '0.82rem',
        padding: '4px 8px',
        lineHeight: 1.2,
        minWidth: 30,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <span style={{ width: 1, height: 22, background: 'rgba(0,0,0,0.1)', display: 'inline-block', margin: '0 4px' }} />;
}

/* ── Toolbar ── */
function Toolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 3, padding: '8px 10px',
      borderBottom: '1px solid rgba(200,149,108,0.2)',
      background: '#FAF6F1',
      borderRadius: '10px 10px 0 0',
    }}>
      {/* Headings */}
      <Btn title="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
      <Btn title="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
      <Btn title="Heading 4" active={editor.isActive('heading', { level: 4 })} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>H4</Btn>

      <Sep />

      {/* Text style */}
      <Btn title="Bold (Ctrl+B)" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
      <Btn title="Italic (Ctrl+I)" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>

      <Sep />

      {/* Lists */}
      <Btn title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <i className="fa-solid fa-list-ul" style={{ fontSize: '0.75rem' }}></i>
      </Btn>
      <Btn title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <i className="fa-solid fa-list-ol" style={{ fontSize: '0.75rem' }}></i>
      </Btn>

      <Sep />

      {/* Blockquote */}
      <Btn title="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <i className="fa-solid fa-quote-left" style={{ fontSize: '0.75rem' }}></i>
      </Btn>

      {/* Horizontal rule */}
      <Btn title="Divider line" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <i className="fa-solid fa-minus" style={{ fontSize: '0.75rem' }}></i>
      </Btn>

      <Sep />

      {/* Undo / Redo */}
      <Btn title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()}>
        <i className="fa-solid fa-rotate-left" style={{ fontSize: '0.75rem' }}></i>
      </Btn>
      <Btn title="Redo (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()}>
        <i className="fa-solid fa-rotate-right" style={{ fontSize: '0.75rem' }}></i>
      </Btn>

      <Sep />

      {/* Paragraph (clear heading) */}
      <Btn title="Normal paragraph" active={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()}>
        ¶ Para
      </Btn>
    </div>
  );
}

/* ── Main component ── */
export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing your blog post here...',
  minHeight = 320,
}: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: number;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder }),
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        style: [
          `min-height:${minHeight}px`,
          'padding:16px 18px',
          'outline:none',
          'font-size:0.95rem',
          'line-height:1.75',
          'color:#2D1B0E',
          'font-family:var(--font-body,sans-serif)',
        ].join(';'),
      },
    },
    immediatelyRender: false,
  });

  /* Sync external value changes (e.g. when editing existing post) */
  useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div style={{
      border: '1.5px solid rgba(200,149,108,0.35)',
      borderRadius: 10,
      background: '#fff',
      overflow: 'hidden',
    }}>
      <Toolbar editor={editor} />

      {/* Editor area */}
      <EditorContent editor={editor} />

      {/* Scoped styles for the rendered content inside the editor */}
      <style>{`
        .tiptap p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #bbb;
          pointer-events: none;
          float: left;
          height: 0;
        }
        .tiptap h2 { font-size: 1.45rem; font-weight: 700; margin: 1.1rem 0 0.4rem; color: #1C0A02; }
        .tiptap h3 { font-size: 1.2rem;  font-weight: 700; margin: 1rem 0 0.35rem; color: #2D1B0E; }
        .tiptap h4 { font-size: 1.05rem; font-weight: 600; margin: 0.8rem 0 0.3rem; color: #3B2010; }
        .tiptap p  { margin: 0.4rem 0 0.6rem; }
        .tiptap ul, .tiptap ol { padding-left: 1.5rem; margin: 0.5rem 0; }
        .tiptap li { margin-bottom: 0.25rem; }
        .tiptap blockquote {
          border-left: 3px solid #C8956C;
          padding: 0.3rem 0 0.3rem 1rem;
          margin: 0.75rem 0;
          color: #6B4226;
          font-style: italic;
        }
        .tiptap hr { border: none; border-top: 1px solid rgba(0,0,0,0.1); margin: 1rem 0; }
        .tiptap strong { font-weight: 700; color: #1C0A02; }
        .tiptap em { font-style: italic; color: #5C3D2E; }
      `}</style>
    </div>
  );
}
