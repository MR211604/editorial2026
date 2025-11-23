import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export function CustomMarkdown({ content, components }) {
  const customComponents = {
    // Componentes para listas
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-gray-700 leading-relaxed" {...props}>
        {children}
      </li>
    ),
    // Componentes para párrafos y texto
    p: ({ children, ...props }) => (
      <p className="mb-4 text-gray-700 leading-relaxed text-justify" {...props}>
        {children}
      </p>
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-gray-900" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    // Componentes para enlaces
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline"
        {...props}
      >
        {children}
      </a>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full border-collapse border border-gray-300 bg-white"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-gray-50" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-gray-300 px-4 py-2 text-center" {...props}>
        {children}
      </td>
    ),
    img: ({ src, alt, title, ...props }) => (
      <img
        src={src}
        alt={alt}
        title={title}
        className="max-w-full h-auto inline-block"
        {...props}
      />
    ),
  };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, remarkGfm]}
      components={{ ...customComponents, ...components }}
    >
      {content}
    </ReactMarkdown>
  );
}
