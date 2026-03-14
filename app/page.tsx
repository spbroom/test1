import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/first">Go to First Page</Link>
    </main>
  );
}
