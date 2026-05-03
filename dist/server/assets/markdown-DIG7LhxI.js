import { jsxDEV } from "react/jsx-dev-runtime";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
function Markdown({ source }) {
  return /* @__PURE__ */ jsxDEV(ReactMarkdown, { rehypePlugins: [rehypeRaw], children: source }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/markdown.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  Markdown as M
};
