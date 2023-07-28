import { ReactNode } from "react";

export default function RootLayout({
  children,
  auth,
}: {
  children: ReactNode;
  auth: ReactNode;
}) {
  return <html lang="en">{true ? auth : children}</html>;
}
