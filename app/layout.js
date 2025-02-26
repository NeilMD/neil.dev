import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-n-bg">{children}</body>
    </html>
  );
}
