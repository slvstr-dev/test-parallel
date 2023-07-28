import { ReactNode } from "react";

export default function Layout({
  children,
  noProgress,
}: {
  children: ReactNode;
  noProgress: ReactNode;
}) {
  return <body>{true ? noProgress : children}</body>;
}
