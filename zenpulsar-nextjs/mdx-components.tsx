import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-zp-dark mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-zp-dark mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-zp-dark mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-zp-gray leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => <ul className="space-y-2 mb-4">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start leading-relaxed">
        <span className="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
        <span className="text-sm text-zp-gray">{children}</span>
      </li>
    ),
    ...components,
  };
} 