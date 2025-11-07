import type { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="rounded-full px-3 py-1 text-white text-sm font-medium bg-blue-400 hover:bg-blue-500 active:bg-blue-600 transition-colors"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
