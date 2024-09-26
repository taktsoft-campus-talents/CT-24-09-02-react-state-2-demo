export function MyComponentWithChildren({
  text,
  children,
}) {
  return (
    <div>
      <b>{text}</b>
      {children}
    </div>
  );
}
