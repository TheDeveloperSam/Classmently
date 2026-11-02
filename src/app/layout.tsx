import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Classroomly — Make space for the good stuff",
    template: "%s | Classroomly",
  },
  description:
    "A calmer kind of classroom management. Bring your students, plans, and little wins together in one happy place.",
  applicationName: "Classroomly",
  openGraph: {
    title: "Classroomly — Make space for the good stuff",
    description: "The classroom tools you need, without the busywork you don’t.",
    siteName: "Classroomly",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
