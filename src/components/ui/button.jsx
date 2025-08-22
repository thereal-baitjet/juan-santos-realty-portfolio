import React from 'react';

export function Button({ asChild = false, variant = "default", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const rounded = " rounded-2xl ";
  const variants = {
    default: " bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600 ",
    outline: " border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40 "
  };
  const cls = base + rounded + (variants[variant] || variants.default) + (className ? (" " + className) : "");

  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, { className: (child.props.className || "") + " " + cls, ...props });
  }
  return <button className={cls} {...props}>{children}</button>;
}
