import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Markdown({ source }: { source: string }) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{source}</ReactMarkdown>
  );
}
