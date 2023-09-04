import { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";

export const ReactMarkdownComponents: ComponentProps<
  typeof ReactMarkdown
>["components"] = {
  h1: ({ children, ...props }) => (
    <h1
      className="mt-2 border-b-2 p-2 border-gray-100 text-3xl font-bold"
      {...props}
    >
      <span className="mr-4 text-gray-300">#</span>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl p-2 font-bold" {...props}>
      <span className="mr-4 text-gray-300">##</span>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl p-2  font-bold" {...props}>
      <span className="mr-4 text-gray-300">###</span>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg p-2 font-bold" {...props}>
      <span className="mr-4 text-gray-300">####</span>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="p-2 text-base" {...props}>
      {children}
    </p>
  ),

  a: ({ children, ...props }) => <a {...props}>{children}</a>,

  ul: ({ children, ...props }) => (
    <ul className="list-disc" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  strong: ({ children, ...props }) => <strong {...props}>{children}</strong>,
  code: ({ children, ...props }) => <code {...props}>{children}</code>,
  img: ({ children, ...props }) => (
    <img alt={props.alt} {...props}>
      {children}
    </img>
  ),
};
