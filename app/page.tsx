import Image from "next/image";
import Link from "next/link";

export default function Home(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        {JSON.stringify(props)}
      </p>

      <Link href="/?foo=1%26bar=2" className="underline">with encoding search params</Link>
      <Link href="/?foo=1&bar=2" className="underline">without search params</Link>
    </main>
  );
}
