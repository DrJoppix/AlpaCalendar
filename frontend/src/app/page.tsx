import Image from "next/image";
import { metadata } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows-7 items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 text-black">
      <h1
        className="text-4xl font-bold"
      >
        {metadata.title as string}
      </h1>
      <h2
        className="text-2xl font-bold"
      >
        {metadata.description}
      </h2>
      <Link
        key="Go To Dashboard"
        href="/dashboard"
        className="text-2xl font-bold text-pink-950 hover:text-pink-600"
      >
        <p className="">{"Go To Dashboard >"}</p>
      </Link>
      <Image
        src="/staring-alpaca.svg"
        width={250}
        height={250}
        alt="A happy toon alpaca"
        className="absolute drop-shadow-2xl animate-bounce bottom-0"
      />
    </main>
  );
}
