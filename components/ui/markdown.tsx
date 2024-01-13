import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  children: string | null;
}

export default function Markdown({ children }: MarkdownProps) {
  if (!children) return;

  return (
    <ReactMarkdown
      className="space-y-4"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-red-500 underline" target="_blank" {...props} />
        ),
        h1: (props) => <h1 className="text-xl font-bold" {...props} />,
        h2: (props) => <h1 className="text-lg font-bold" {...props} />,
        h3: (props) => <h1 className="font-bold" {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}
