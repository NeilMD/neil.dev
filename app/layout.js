import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neil Capistrano | Portfolio</title>
        <link rel="icon" href="/neil.dev/img/neil_thinking.webp" sizes="any" />
      </head>
      <body className="bg-n-bg">{children}</body>
    </html>
  );
}
