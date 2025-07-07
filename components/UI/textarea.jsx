export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-gray-300 p-2 rounded w-full ${className}`}
      {...props}
    />
  );
}
