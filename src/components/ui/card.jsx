export function Card({ className = "", children, ...props }) {
  const base = "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm " + className;
  return <div className={base} {...props}>{children}</div>;
}
export function CardContent({ className = "", children, ...props }) {
  const base = "p-6 " + className;
  return <div className={base} {...props}>{children}</div>;
}
