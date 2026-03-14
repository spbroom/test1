import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <input />
        <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <Link href="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link href="/first">First</Link>
        </nav>

        {/* This is your <router-outlet> */}
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
