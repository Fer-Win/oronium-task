import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-7xl ">Oronium E-Commerce Store</div>
      <div className="text-2xl mt-5">
        Head over to
        <Link
          href={"/admin"}
          className="text-violet-500 hover:text-violet-400 px-2 transition-all duration-200 ease-in-out"
        >
          Admin
        </Link>
        page
      </div>
    </main>
  );
}
